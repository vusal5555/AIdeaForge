<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\InvalidStateException;
use Log;

class ProviderController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            // Attempt to retrieve the user from the provider
            $user = Socialite::driver($provider)->stateless()->user();
            dd($user);
        } catch (InvalidStateException $e) {
            // Handle the case where the state does not match
            Log::error('Invalid state error during authentication:', [
                'provider' => $provider,
                'message' => $e->getMessage(),
            ]);
            return redirect()->route('login')->withErrors(['msg' => 'Invalid state. Please try again.']);
        } catch (\Exception $e) {
            // Handle other exceptions, such as network issues or invalid credentials
            Log::error('Authentication error:', [
                'provider' => $provider,
                'message' => $e->getMessage(),
            ]);
            return redirect()->route('login')->withErrors(['msg' => 'An error occurred during the authentication process.']);
        }
    }
}
