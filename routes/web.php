<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'posts' => [
            [
                'user' => 'Hubert Rey',
                'time' => '2 jam yang lalu',
                'content' => "Haloo, kami dari PT...",
            ]]]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');   //Ini rute masuk gerbang nya, apa udah ke verifikasi dan ada token autentikasi
    })->name('dashboard'); });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
