define(["jquery","underscore","json","backbone"],
    function($,_,JSON,Backbone){

        var Event = Backbone.Model.extend({

        });

        var EventsCollection = Backbone.Collection.extend({
            model : Events
        });


        return Events;
    }
);