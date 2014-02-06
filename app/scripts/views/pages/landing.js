define(['jquery', 'marionette','text!./landing.html', 'models/events', 'views/controls/event', 'image.slider'],
    function($, Marionette, template, EventCollection){
        'use strict';

        return Marionette.ItemView.extend({
            template : template,
            className : 'landing',

            initialize : function(){
                var eventCollection = new EventCollection();
                eventCollection.fetch({
                    success : function(){

                    },

                    error: function(){
                        
                    }
                });
            },

            onRender : function(){

                // $(window).load(function() {
                //        console.log('render');
                //     $('.nivoSlider').nivoSlider();
                // });
                



                // this.$('.nivoSlider').nivoSlider({
                //     effect : 'fade',
                //     directionNav: false,
                //     controlNav: false,
                //     animSpeed: 500,
                //     pauseTime: 1000
                // });
            }

        });
    }
);