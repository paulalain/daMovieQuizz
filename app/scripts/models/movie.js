/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Models = DaMovieQuizz.Models || {};

/*
    getRandNumber
    private function
    Return a rand number between 0 and nb
*/

function getRandNumber(nb){
    return Math.floor(Math.random() * nb);
}

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
                var idRand = getRandNumber(model.pageMovies)+1;

                if (options.url === undefined) {
                    options.url = model.urlRoot + model.url_top_rated + "?page=" + idRand + "&api_key=" + model.key;
                }

                $.ajax({
                    type : 'GET',
                    url : options.url,
                    dataType : 'json',
                    success : function(data) {
                        // get one movie between 0 & length-1
                        if(data && data.results){
                            var found = false;
                            // while not found we iterate (sometimes title is not defined)
                            while(!found){
                                var randNumber = getRandNumber(data.results.length);

                                if(data.results[randNumber] 
                                    && data.results[randNumber].title){
                                    found = true;
                                    var imagePath = model.defaultImageMovie;

                                    if(data.results[randNumber].poster_path){
                                        imagePath = model.url_images + data.results[randNumber].poster_path;
                                    }
                                    
                                    resolve({
                                        id: data.results[randNumber].id,
                                        name: data.results[randNumber].title,
                                        image: imagePath
                                    });
                                }
                            }
                            
                        }else{
                            reject(new Error("No result in the PAI search result."))
                        }
                    },
                    error: function(data){
                        reject(new Error("Impossible to select a rand movie."));
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
                        reject(new Error("Impossible to get movie credits."));
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
                    if(cast){
                        var maxLength = (cast.length < model.nbMaxActorMovie) ? cast.length : model.nbMaxActorMovie;
                        var found = false;

                        // iterate to not have unknown actor with no name
                        while(!found){
                            var idRand = getRandNumber(maxLength);
                            if(cast[idRand] && cast[idRand].name){
                                found = true;
                                
                                // default image if there is no profile path
                                var imagePath = model.defaultImageActor;

                                if(cast[idRand].profile_path){
                                    imagePath = model.url_images + cast[idRand].profile_path;
                                }

                                resolve({ 
                                    name: cast[idRand].name, 
                                    image: imagePath 
                                });
                            }
                        }
                    }else{
                        reject("No cast for this movie.")
                    }
                    
                }).catch(function(error){
                    reject(error);
                });
            });
        }
    });

})();
