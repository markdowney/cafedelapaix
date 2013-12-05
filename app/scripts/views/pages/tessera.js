define(['jquery', 'marionette','text!./tessera.html'],
    function($, Marionette, template){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'tessera'
        });
    }
);