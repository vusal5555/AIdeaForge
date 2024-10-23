<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class template extends Model
{

    protected $fillable = [
        'formData',
        'aiResponse',
        'user_id',
    ];

    protected $casts = [
        'formData' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
