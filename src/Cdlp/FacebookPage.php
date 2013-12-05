<?php

namespace Cdlp;

use \Facebook;

class FacebookPage
{
    private $facebook;

    public function __construct ()
    {
        $this->facebook = new Facebook(array(
           'appId'              => '255223947966050',
           'secret'             => '3ea4b7d94f44e0af555313937c2cbbc0',
           'allowSignedRequest' => false
        ));

        $this->facebook->setAccessToken("255223947966050|QEDF7e46o-l3Iq8jg8yk1dMsM4E");
    }

    public function getEvents ()
    {
        $results = $this->facebook->api('CafedelaPaixTN?fields=events.fields(id,start_time,name,description,cover)');
        return $results['events']['data'];
    }
}