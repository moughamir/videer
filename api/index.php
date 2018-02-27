<?php

session_start();

header('Content-type: application/json');
require("vimeo/autoload.php");
define('clientId', '740c724db094a13cd5dc6056c3d1fc55fed08dbb');
define('clientSecret', 'IgQ4kuwuJm74LggNdYdhUYKPlETGHJ1jd+/Y7c69ZnXeCEeZNNdqllnvEYrWwYafTG5iGer8R9yFibySkiesVC4tzII/LQfXCPR89TjtAZoelBDrJvVQNffEkjxIhSOw');


$vimeo = new \Vimeo\Vimeo(clientId, clientSecret);

/**
 * Access public data
 */

$token = $vimeo->clientCredentials('public');

//var_dump($token['body']['access_token']);

$vimeo->setToken($token['body']['access_token']);

//$query = $_POST['q'];
$limit = 10;

$request = $vimeo->request('/channels/top/videos', array('page' => 1,'per_page' => $limit, 'sort' => 'likes', 'direction' => 'desc'), 'GET');

$videer = array();

$videer = json_encode($request["body"]["data"]);

print_r(str_replace('\\/', '/', $videer));
die();
