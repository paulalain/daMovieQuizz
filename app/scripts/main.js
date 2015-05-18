/*global DaMovieQuizz, $*/

DaMovieQuizz = (function() {

    var api = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        content: null,

        init: function () {
            this.content = $("#content");
            'use strict';

            // initialize menu
            ViewsFactory.menu();

            // initialize router
            new DaMovieQuizz.Routers.Router();

            Backbone.history.start();
            return this;
        }
    };
    

    var ViewsFactory = {
        menu: function() {
            if(!this.menuView) {
                this.menuView = new api.Views.Menu({ 
                    el: $("#menu") 
                });
            }
            return this.menuView;
        }
    };

   /*  var Router = Backbone.Router.extend({
        routes: {
            "": "game",
            "highscore": "highscore"
        },

        game: function(){
            console.log("Router -- Start Game")
            // new game
            var game = new api.Models.Game();
            var view = new api.Views.PlayGame({ el: $("#content"), model: game });
            view.render();
        }
    });*/

    //api.router = new Router();

    return api;
})();

$(document).ready(function () {
    'use strict';
    DaMovieQuizz.init();
});
