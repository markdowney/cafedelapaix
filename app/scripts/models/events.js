define(["jquery","underscore","json","backbone"],
    function($,_,JSON,Backbone){

        var Event = Backbone.Model.extend({

        });

        var Events = Backbone.Collection.extend({
            model : Event,
            url : 'http://cafe-de-la-paix.herokuapp.com/events.json'
        });


        return Events;
    }
);