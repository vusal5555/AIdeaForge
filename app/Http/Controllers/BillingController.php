<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class BillingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Billing/index');
    }

    public function handle(Request $request)
    {
        $payload = $request->all();
        Log::info('Paddle Webhook:', ['payload' => $payload]);
    }

}
