define(['jquery', 'marionette','text!./header.html'],
    function($, Marionette, template){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'header',

            onRender : function(){
                
                this.$el.find('li a').click(function(){
                    
                    event.preventDefault();
                    var target = $(this).attr('href');
                    console.log(target);

                    $('html, body').animate({
                         scrollTop: $(target).offset().top - 80
                     }, 1200);
                });
            }
        });
    }
);