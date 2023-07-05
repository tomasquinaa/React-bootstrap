<?php

namespace App\Services;

use GuzzleHttp\Client;

class RapidAPI
{
    private $client;

    public function __construct()
    {
        $this->client = new Client();
    }

    public function getAllPlays()
    {
        $response = $this->client->request('GET', 'https://free-nba.p.rapidapi.com/teams', [
            'headers' => [
                'X-RapidAPI-Host' => 'free-nba.p.rapidapi.com',
                'X-RapidAPI-Key' => '948c4b2385msh52b1727977c7a6fp1d647bjsn367d4c2ef077',
            ]
        ]);

        return json_decode($response->getBody());
    }
}
