define(['jquery', 'marionette','text!./event.html'],
    function($, Marionette, template){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'events'
        });
    }
);