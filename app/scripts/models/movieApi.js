/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Models = DaMovieQuizz.Models || {};

(function () {
    'use strict';

    DaMovieQuizz.Models.MovieApi = Backbone.Model.extend({
        urlRoot: 'https://api.themoviedb.org/3',
        key: '7ea5f490261a949e52930517e1b4657c',
        url_images: 'http://image.tmdb.org/t/p/w342',
    });

})();