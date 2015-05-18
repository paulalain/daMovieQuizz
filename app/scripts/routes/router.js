/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Routers = DaMovieQuizz.Routers || {};

(function () {
    'use strict';

    DaMovieQuizz.Routers.Router = Backbone.Router.extend({
		routes: {
            "": "game",
            "highscore": "highscore"
        },

        game: function(){
            console.info("Router -- Start Game")
            // new game
            var game = new DaMovieQuizz.Models.Game();
            var view = new DaMovieQuizz.Views.PlayGame({ el: $("#content"), model: game });
        }
    });

})();
