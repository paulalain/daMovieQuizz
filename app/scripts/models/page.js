/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Models = DaMovieQuizz.Models || {};

(function () {
    'use strict';

    /*
        Model Page
        Page in use
    */
    DaMovieQuizz.Models.Page = Backbone.Model.extend({
        defaults: {
            page: "playGame"
        },
    });

})();
