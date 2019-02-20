<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'title' => Str::title($faker->words(2, true)),
        'start_date' => $faker->dateTimeBetween('now', '+1 year'),
        'description' => $faker->paragraph(1),
    ];
});
