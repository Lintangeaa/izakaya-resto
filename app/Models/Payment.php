<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id', 'transaction_id', 'status', 'gross_amount', 'transaction_time',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
