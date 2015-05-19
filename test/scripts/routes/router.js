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
                    model: DaMovieQuizz.game,
                    collection: DaMovieQuizz.highscores,
                });
            }
            return this.gameView.render();
        },
        
        highscore: function(){
            if(!this.highscoreView){
                this.highscoreView = new DaMovieQuizz.Views.Highscores({ 
                    el: $("#content"), 
                    collection: DaMovieQuizz.highscores 
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

            //change page
            DaMovieQuizz.page.set('page', 'highscores');

             var view =  ViewsFactory.highscore();
        }, 
    });

})();
