/*global DaMovieQuizz, $*/

//if debug mode, console log are displayed
var DEBUG = false;

if(!DEBUG){
    if(!window.console) window.console = {};

    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}

DaMovieQuizz = (function() {

    var api = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        page: null,
        game: null,
        highscores: null,

        init: function () {
            'use strict';

            // initialize page
            this.page = new DaMovieQuizz.Models.Page();

            //initialize game
            this.game = gameFactory("survivor");

            //initialize highscore once
            this.highscores = new DaMovieQuizz.Collections.Highscores();

            // initialize menu
            ViewsFactory.menu();

            // initialize router
            new DaMovieQuizz.Routers.Router();

            Backbone.history.start();
            return this;
        }
    };
    
    // static views
    var ViewsFactory = {
        menu: function() {
            if(!this.menuView) {
                this.menuView = new api.Views.Menu({ 
                    el: $("#menu") ,
                    model: DaMovieQuizz.page
                });
            }
            return this.menuView;
        }
    };

    // list of games in a factory
    var gameFactory = function(gameName) {
        if(gameName == "survivor"){
            if(!this.gameSurvivor){
                return new DaMovieQuizz.Models.Game();
            }

            return this.gameSurvivor;
        }else{
            return null;
        }
        // implements othe game here (they have to extends DaMovieQuizz.Models.Game
    };

    return api;
})();

$(document).ready(function () {
    'use strict';
    DaMovieQuizz.init();
});
