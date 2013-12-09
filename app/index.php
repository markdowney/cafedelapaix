<?php

require_once __DIR__.'/../vendor/autoload.php';

use Cdlp\FacebookPage,
    Cdlp\Event;

use Silex\Application;

use Symfony\Component\HttpFoundation\JsonResponse,
    Symfony\Component\HttpFoundation\Request;

date_default_timezone_set("Europe/Rome");

$app = new Application();
$app['debug'] = true;

$app->get('/events.json', function(Application $app, Request $request) {
    $facebookPage = new FacebookPage();

    $events = array();
    foreach ($facebookPage->getEvents() as $data) {
        $event = new Event($data);

        // ignore events older than 7 days
        $now = new \DateTime;
        if ($now->diff($event->getStartTime())->format('%a') > 7) {
            break;
        }

        $events[] = $event->toArray();
    }

    $response = new JsonResponse($events);
    return $response->setCallback(
        $request->get('jsonp_callback')
    );
});

$app->run();