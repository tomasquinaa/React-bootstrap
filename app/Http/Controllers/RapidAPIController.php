<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Services\RapidAPI;
use Inertia\Inertia;

class RapidAPIController extends Controller
{
    private $radiService;

    public function __construct(RapidAPI $serviceradi)
    {
        $this->radiService = $serviceradi;
    }

    public function index()
    {
        $response = $this->radiService->getAllPlays();
        //alterei aqui, testa ainda
        $responseString = json_encode($response);
        $responseData = json_decode($responseString);

        // dd($responseData);

        // Verificar a estrutura dos dados
        //dd($responseData);

        //return response()->json($responseData);

        return Inertia::render('Posts/RapidComponent', ['datas' => $responseData]);

        // return view('RapidAPI.index', [
        //     'datas' => $responseData
        // ]);
    }
}
