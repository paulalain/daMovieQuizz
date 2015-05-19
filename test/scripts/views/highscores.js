/*global DaMovieQuizz, Backbone, JST*/

DaMovieQuizz.Views = DaMovieQuizz.Views || {};

(function () {
    'use strict';

    /*
        Highscore view
    */

    DaMovieQuizz.Views.Highscores = Backbone.View.extend({

        template: JST['app/scripts/templates/highscores.ejs'],

        initialize: function () {
            console.info("View Highscores -- Initialize");

            this.$el.empty();

            this.render();
        },

        render: function () {
            console.info("View Highscores -- Render");
            this.$el.html(this.template({ 
                                        index: 1, //rank start at 1
                                        highscores: this.collection.first(10) //display only the first 10
            }));
        }

    });

})();
