<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'country', 'city', 'status', 'photo', 'first_name', 'last_name', 'email'
    ];
}
