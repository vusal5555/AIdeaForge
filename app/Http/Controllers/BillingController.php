<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Log;
use Stripe\Stripe;

class BillingController extends Controller
{

    public function index()
    {
        return Inertia::render('Billing/index');
    }

    public function checkout()
    {
        Stripe::setApiKey(config('stripe.sk'));

        $user = Auth::user();

        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => 'AI Content Generator',
                        'description' => 'Get your 10000 credits',
                    ],
                    'unit_amount' => 999,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'customer_email' => $user->email,
            'success_url' => route('success'),
            'cancel_url' => route('/billing'),
        ]);

        return Inertia::location($session->url);

    }

    public function webhook()
    {
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');
        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload, $sig_header, $endpoint_secret
            );
        } catch (\UnexpectedValueException $e) {
            http_response_code(400);
            exit();
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            http_response_code(400);
            exit();
        }

        if ($event->type == 'checkout.session.completed') {
            $session = $event->data->object;
            Log::info($session);
            $user = User::where('email', $session->customer_details->email)->first();
            $user->credits += 10000;
            $user->save();
        }

        http_response_code(200);
    }

    public function success()
    {
        return Inertia::render('Success/index');
    }

}
