<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    protected function index()
    {
        return view('index');
    }
    protected function showChat()
    {
        return view('apps-chat');
    }
}
