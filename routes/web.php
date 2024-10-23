<?php

use App\Http\Controllers\BillingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TemplateController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/auth/{provider}/redirect', [\App\Http\Controllers\ProviderController::class, 'redirect'])->name('github.redirect');
Route::get('/auth/{provider}/callback', [\App\Http\Controllers\ProviderController::class, 'callback']);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('/dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('/profile');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard/{template_slug}', [TemplateController::class, 'index'])->name('template.index');
    Route::post('/generateAIContent', [TemplateController::class, 'generateContent'])->name('template.generateContent');
    Route::post('/saveTemplate', [TemplateController::class, 'store'])->name('template.store');

    Route::get('/history', [TemplateController::class, 'displayTemplates'])->name('/history');

    Route::get('/billing', [BillingController::class, 'index'])->name('/billing');
    Route::get('/getTemplates', [TemplateController::class, 'getTemplates'])->name('/getTemplates');

});

require __DIR__ . '/auth.php';
