<?php

namespace App\Controller;

use App\Service\LoginManager;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

/**
 * Class LoginController
 *
 * @package App\Controller
 */
class LoginController
{
    /**
     * @var \App\Service\LoginManager
     */
    private $loginManager;

    /**
     * LoginController constructor.
     *
     * @param \App\Service\LoginManager $loginManager
     */
    public function __construct(LoginManager $loginManager)
    {
        $this->loginManager = $loginManager;
    }

    /**
     * @param $code
     * @param $state
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function fetchToken($code, $state)
    {
        if (empty($code) || empty($state)) {
            throw new HttpException(500, 'Missing params');
        }

        $result = $this->loginManager->fetchToken($code, $state);

        if ($result['error'] == true) {
            throw new HttpException(500, $result['message']);
        }

        return new Response(json_encode($result));
    }
}