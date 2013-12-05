define(['jquery', 'marionette','text!./restaurant.html'],
    function($, Marionette, template){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'restaurant'
        });
    }
);