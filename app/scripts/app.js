define(["jquery","backbone","marionette", "views/pages/landing", "views/pages/restaurant",
    "views/pages/tessera","views/pages/contact", "views/pages/events", "views/controls/header",
    "tools/marionette.override"],

    function($,Backbone, Marionette, LandingPage, RestaurantPage, TesseraPage, ContactPage, EventsPage, Header){

        // set up the app instance
        var application = new Marionette.Application();
        
        application.addRegions({
            mainRegion: "#content",
            header: "header",
            footer: "footer"
        });

        application.on('initialize:after', function() {

        application.header.show(new Header());
    
            var ApplicationRouter = Backbone.Router.extend({

                routes: {
                    "eventi" : "events",
                    "contacti" : "contact",
                    "restaurante" : "restaurant",
                    "tessera" : "tessera",
                    ".*": "landing"
                },

                landing: function() {
                    application.mainRegion.show(new LandingPage());
                },

                events: function(){
                    application.mainRegion.show(new EventsPage());
                },

                contact: function() {
                    application.mainRegion.show(new ContactPage());
                },
                restaurant: function() {
                    application.mainRegion.show(new RestaurantPage());
                },
                tessera: function() {
                    application.mainRegion.show(new TesseraPage());
                }
            });

            var router = new ApplicationRouter();
            Backbone.history.start({pushState: false});

        });

        // export the app from this module
        return application;
    }
);
