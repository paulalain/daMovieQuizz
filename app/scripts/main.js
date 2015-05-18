/*global DaMovieQuizz, $*/

DaMovieQuizz = (function() {

    var api = {
        Models: {},
        Collections: {},
        Views: {},
        router: null,
        content: null,

        init: function () {
            this.content = $("#content");
            'use strict';

            // initialize menu
            ViewsFactory.menu();

            Backbone.history.start();
            return this;
        },

        changePage: function(el) {
            this.content.empty().append(el);
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

     var Router = Backbone.Router.extend({
        routes: {
            "": "game",
            "highscore": "highscore"
        },

        game: function(){
            console.log("Router -- Start Game")
            // new game
            var game = new api.Models.Game();
            var view = new api.Views.PlayGame({ model: game });
            api.changePage(view.$el);
            view.render();
        }
    });

    api.router = new Router();

    return api;
})();

$(document).ready(function () {
    'use strict';
    DaMovieQuizz.init();
});
