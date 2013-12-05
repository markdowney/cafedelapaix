<?php

require_once __DIR__.'/../vendor/autoload.php';

use Cdlp\FacebookPage,
    Cdlp\Event;

$app = new Silex\Application();

$app->get('/', function() use($app) {
    return $app->sendFile('index.html');
});

$app->get('/events.json', function() use($app) {
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

    return $app->json($events);
});

$app->run();