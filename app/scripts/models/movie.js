/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Models = DaMovieQuizz.Models || {};

(function () {
    'use strict';

    DaMovieQuizz.Models.Movie = DaMovieQuizz.Models.MovieApi.extend({

        url: '/movie',
        url_top_rated: '/movie/top_rated',
        url_credits_start: function(id){
            return '/movie/' + id + '/credits';
        },
        // max 1000
        pageMovies: 10, // pages number of top rated movies (increase and the game will be harder)
        nbMaxActorMovie: 3, // number of actors to retrieve of credits (increase and the game will be harder)

        fetchById: function (id, options) {
            console.log("Model Movie -- Fetch Movie By Id");
            options = options || {};
            if (options.url === undefined) {
                options.url = this.urlRoot + this.url + "/" + id + "?api_key=" + this.key;
            }

            return Backbone.Model.prototype.fetch.call(this, options);
        },

        fetchByRand: function (options) {
            console.log("Model Movie -- Fetch Movie By Rand");
            options = options || {};
            var model = this;

            return new Promise(function(resolve, reject){
                var idRand = Math.floor(Math.random() * model.pageMovies) + 1;

                if (options.url === undefined) {
                    options.url = model.urlRoot + model.url_top_rated + "?page=" + idRand + "&api_key=" + model.key;
                }

                $.ajax({
                    type : 'GET',
                    url : options.url,
                    dataType : 'json',
                    success : function(data) {
                        // get one movie between 0 & length-1
                        var randNumber = Math.floor(Math.random() * data.results.length);
                        resolve({
                            id: data.results[randNumber].id,
                            name: data.results[randNumber].title,
                            image: model.url_images + data.results[randNumber].poster_path
                        });
                    },
                    error: function(data){
                        reject(new Error("Impossible de sélectionner un film au hasard."));
                    }
                });
            });
        },

        fetchCredits: function (id, options) {
            console.log("Model Movie -- Fetch Credits");
            options = options || {};
            var model = this;

            return new Promise(function(resolve, reject){
                if (options.url === undefined) {
                    options.url = model.urlRoot + model.url_credits_start(id) + "?api_key=" + model.key;
                }

                $.ajax({
                    type : 'GET',
                    url : options.url,
                    dataType : 'json',
                    success : function(data) {
                        resolve(data);
                    },
                    error: function(data){
                        reject(new Error("Impossible de récupérer les crédits du film."));
                    }
                });
            });
        },

        fetchOneCreditByRand: function(id, options){
            console.log("Model Movie -- Fetch One Credit By Rand");
            options = options || {};
            var model = this;
            return new Promise(function(resolve, reject){
                model.fetchCredits(id).then(function(credits){
                    var cast = credits.cast;
                    var maxLength = (cast.length < model.nbMaxActorMovie) ? cast.length : model.nbMaxActorMovie;
                    var idRand = Math.floor(Math.random() * maxLength);
                    resolve({ 
                        name: cast[idRand].name, 
                        image: model.url_images + cast[idRand].profile_path 
                    });
                }).catch(function(error){
                    reject(error);
                });
            });
        }
    });

})();
