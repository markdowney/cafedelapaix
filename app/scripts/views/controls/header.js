define(['jquery', 'marionette','text!./header.html'],
    function($, Marionette, template){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'header'
        });
    }
);