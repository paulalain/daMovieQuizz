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

            //initialize game one
            this.game = new DaMovieQuizz.Models.Game();

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

    return api;
})();

$(document).ready(function () {
    'use strict';
    DaMovieQuizz.init();
});
