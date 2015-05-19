/*global DaMovieQuizz, Backbone, JST*/

DaMovieQuizz.Views = DaMovieQuizz.Views || {};

(function () {
    'use strict';

    /*
        Highscore view
    */

    DaMovieQuizz.Views.Highscores = Backbone.View.extend({

        template: JST['app/scripts/templates/highscores.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            console.info("View Highscores -- Initialize");

            this.$el.empty();

            this.render();
        },

        render: function () {
            console.info("View Highscores -- Render");
            this.$el.html(this.template({ highscores: this.collection.models }));
        }

    });

})();
