define(['jquery', 'marionette','text!./landing.html'],
    function($, Marionette, template){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'landing'
        });
    }
);