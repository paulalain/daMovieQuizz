/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Models = DaMovieQuizz.Models || {};

(function () {
    'use strict';

    /*
        Highscore model
        Represent a highscore (pseudo, score and duration in seconds)
    */

    DaMovieQuizz.Models.Highscore = Backbone.Model.extend({

        defaults: {
            pseudo: "",
            score: 0,
            duration: 0, // in seconds
        },

        validate: function(attrs, options) {
            if (attrs.pseudo.length == 0) {
                return "Pseudo must be provided.";
            }
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
