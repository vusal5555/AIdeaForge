<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class BillingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Billing/index');
    }

}
