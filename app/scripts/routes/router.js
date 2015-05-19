/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Routers = DaMovieQuizz.Routers || {};

(function () {
    'use strict';
    
    /*
        View Factory
        We have to create only one view (singleton)
    */

    var ViewsFactory = {
        game: function(){
            if(!this.gameView){
                this.gameView = new DaMovieQuizz.Views.PlayGame({ 
                    el: $("#content"), 
                    model: DaMovieQuizz.game 
                });
            }
            return this.gameView.render();
        },
        
        highscore: function(highscores){
            if(!this.highscoreView){
                this.highscoreView = new new DaMovieQuizz.Views.Highscores({ 
                    el: $("#content"), 
                    collection: highscores 
                });
            }
            return this.highscoreView.render();
        }
    };

    DaMovieQuizz.Routers.Router = Backbone.Router.extend({
		routes: {
            "": "game",
            "highscores": "highscores"
        },

        game: function(){
            console.info("Router -- Start Game")

            //change page
            DaMovieQuizz.page.set('page', 'playGame');

            var view = ViewsFactory.game();
        }, 

        highscores: function(){
            console.info("Router -- Highscores")
            // new game
            var highscores = new DaMovieQuizz.Collections.Highscores();

            //change page
            DaMovieQuizz.page.set('page', 'highscores');

             var view =  ViewsFactory.highscore(highscores);
        }, 
    });

})();
