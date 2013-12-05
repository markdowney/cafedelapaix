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
        $picture = null;
        if (isset($this->data['cover']) && isset($this->data['cover']['source'])) {
            $picture = $this->data['cover']['source'];
        }

        return array(
            'name'        => $this->data['name'],
            'startTime'   => $this->data['start_time'],
            'description' => isset($this->data['description']) ? $this->data['description'] : null,
            'picture'     => $picture,
        );
    }

    public function getStartTime ()
    {
        $startTime = $this->formatDate(\DateTime::ATOM, $this->data['start_time']);
        if ($startTime === FALSE) {
            $startTime = $this->formatDate('Y-m-d', $this->data['start_time']);
        }

        return $startTime;
    }

    private function formatDate ($format, $date)
    {
        return \DateTime::createFromFormat($format, $date);
    }
}