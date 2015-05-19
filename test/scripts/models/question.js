/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Models = DaMovieQuizz.Models || {};

/*
    Model Question
    Represent a question with actor, movie and answer
*/
(function () {
    'use strict';

    DaMovieQuizz.Models.Question = Backbone.Model.extend({

        defaults: {
            actor: {name: "", image: ""},
            movie: {name: "", image: ""},
            correctAnswer: false
        },
        
        /*
            validateAnswer
            Return true if the answer is correct
        */
        validateAnswer: function(answer){
            return (this.attributes.correctAnswer == answer);
        },

        /*
            fetchNewQuestion
            Fetch a new question (fetch actor, movie and answer)
        */
        fetchNewQuestion: function(){
            console.info("Model Question -- Fetch New Question")
            var model = this;

            return new Promise(function(resolve, reject){
                var movie = new DaMovieQuizz.Models.Movie();
                // if true, response is correct, if false, response is wrong
                var randBoolean = (Math.floor(Math.random() * 2) == 0);
                model.set('correctAnswer', randBoolean);

                //get correct tuple
                movie.fetchByRand()
                    .then(function(m){
                        model.set('movie', m);
                        return movie.fetchOneCreditByRand(m.id);
                    }, function(error){
                        reject(error);
                    })
                    .then(function(correctCredit){
                        if(randBoolean){
                            // get the correct credit
                            model.set('actor', correctCredit);
                            resolve(model);
                        }else{
                            // get a wrong credit
                            var wrongMovie = new DaMovieQuizz.Models.Movie();
                            wrongMovie.fetchByRand()
                            .then(function(m){
                                return wrongMovie.fetchOneCreditByRand(m.id);
                            }, function(error){
                                reject(error);
                            }).then(function(wrongCredit){
                                model.set('actor', wrongCredit);
                                resolve(model);
                            }, function(error){
                                reject(error);
                            });
                        }
                    }, function(error){
                        reject(error);
                    })
                    .catch(function(error){
                        console.error(error);
                        reject(error);
                    });
            });
        }
    });

})();
