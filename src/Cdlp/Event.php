<?php

namespace Cdlp;

class Event
{
    private $data;

    public function __construct ($data)
    {
        $this->data = $data;
    }

    public function toArray ()
    {
        return array(
            'name'        => $this->data['name'],
            'startTime'   => $this->data['start_time'],
            'description' => $this->data['description'],
            'picture'     => $this->data['cover']['source'],
        );
    }

    public function getStartTime ()
    {
        return \DateTime::createFromFormat(\DateTime::ATOM, $this->data['start_time']);
    }
}