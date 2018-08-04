<?php

namespace App\Service;

use GuzzleHttp\Client;

/**
 * Class LoginManager
 *
 * @package App\Service
 */
class LoginManager
{
    /**
     * @var \GuzzleHttp\Client
     */
    private $guzzle;

    /**
     * LoginManager constructor.
     *
     * @param \GuzzleHttp\Client $guzzle
     */
    public function __construct(Client $guzzle)
    {
        $this->guzzle = $guzzle;
    }

    /**
     * @param $code
     * @param $state
     * @return array
     */
    public function fetchToken($code, $state)
    {
        $response = $this->guzzle->request('POST', '/login/oauth/access_token', [
            'form_params' => [
                'client_id'     => $_ENV['CLIENT_ID'],
                'client_secret' => $_ENV['CLIENT_SECRET'],
                'code'          => $code,
                'state'         => $state,
            ],
        ]);

        if ($response->getStatusCode() == '200') {
            parse_str((string)$response->getBody(), $body);

            return !empty($body['error']) ? [
                'error'   => true,
                'message' => $body['error_description'],
            ] : [
                'error'        => false,
                'access_token' => $body['access_token'],
            ];
        } else {
            return [
                'error'   => true,
                'message' => 'Github error',
            ];
        }
    }
}