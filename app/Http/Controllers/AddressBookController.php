<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddressBookController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('address-book');
    }

    /**
     * Show the new person form
     *
     * @return \Illuminate\Http\Response
     */
    public function new() {
        return view('new-person');
    }
}
