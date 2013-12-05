define(['jquery', 'marionette','text!./events.html'],
    function($, Marionette, template){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'events'
        });
    }
);