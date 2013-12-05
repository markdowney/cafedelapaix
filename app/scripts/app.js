define(["jquery","backbone","marionette", "views/pages/landing", "views/controls/header",
    "tools/marionette.override"],

    function($,Backbone, Marionette, LandingPage, Header){

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
                    ".*": "landing"
                },

                landing: function() {
                    application.mainRegion.show(new LandingPage());
                }
            });

            var router = new ApplicationRouter();
            Backbone.history.start({pushState: false});

        });

        // export the app from this module
        return application;
    }
);
