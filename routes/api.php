<?php

use App\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('profile', function (Request $request) {
    return Profile::first();
});

Route::post('profile', function (Request $request) {
    return Profile::create($request->all());
});

Route::put('profile', function (Request $request) {
    $profile = Profile::first();
    return $profile->update($request->all());
});


