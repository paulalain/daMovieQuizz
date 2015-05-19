/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Routers = DaMovieQuizz.Routers || {};

(function () {
    'use strict';

    DaMovieQuizz.Routers.Router = Backbone.Router.extend({
		routes: {
            "": "game",
            "highscores": "highscores"
        },

        game: function(){
            console.info("Router -- Start Game")
            // new game
            var game = new DaMovieQuizz.Models.Game();

            //change page
            DaMovieQuizz.page.set('page', 'playGame');

            var view = new DaMovieQuizz.Views.PlayGame({ el: $("#content"), model: game });
        }, 

        highscores: function(){
            console.info("Router -- Highscores")
            // new game
            var highscores = new DaMovieQuizz.Collections.Highscores();

            //change page
            DaMovieQuizz.page.set('page', 'highscores');

            var view = new DaMovieQuizz.Views.Highscores({ el: $("#content"), collection: highscores });
        }, 
    });

})();
