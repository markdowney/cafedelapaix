define(['jquery', 'marionette','text!./contact.html'],
    function($, Marionette, template){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'contact'
        });
    }
);