/*global DaMovieQuizz, Backbone*/

/* 
    Game Model
    Represent the game
*/

DaMovieQuizz.Models = DaMovieQuizz.Models || {};

(function () {
    'use strict';

    DaMovieQuizz.Models.Game = Backbone.Model.extend({

       defaults: {
            score: 0,
            question: null,
            state: 0, // 0 => not started, 1 => game starter, 2 => game over, 3 => error
            loading: false,
            dateStart: null,
            dateEnd: null
        },

        initialize: function(){
            this.loading = false;
        },

        /*
        startGame : 
            Method is called to start the game.
            Score is set to 0.
        */

        startGame: function(){
            console.info("Model Game -- Start Game");

            this.set('loading', true);
            var model = this;
            return new Promise(function(resolve, reject){
                if(model.get('state') == 0){
                    model.getNewQuestion()
                        .then(function(q){
                            model.set('dateStart', Date.now());
                            model.set('state', 1);
                            model.set('loading', false);
                            resolve(q);
                        });
                }else{
                    console.info("Model Game -- Game is already launched");
                    reject();
                }
            });
        },
        
        /*
        stopGame : 
            Method is called to stop the game.
            State is set to 2 (game over).
        */

        stopGame: function(){
            console.info("Model Game -- Stop Game");
            var model = this;
            return new Promise(function(resolve, reject){
                if(model.get('state') == 1){
                    model.set('dateEnd', Date.now());
                    model.set('state', 2);
                    resolve(model);
                }else{
                    console.info("Model Game -- Game is not launched");
                    reject();
                }
            });
        },

        /*
        restartGame : 
            Method is called to restart the game.
            State is set to 1 (play).
            Score is set to 0.
        */

        restartGame: function(){
            console.info("Model Game -- Retart Game");
            var model = this;
            return new Promise(function(resolve, reject){
                model.set('loading', true);
                if(model.get('state') == 2 || model.get('state') == 3){
                    model.getNewQuestion().
                        then(function(q){
                            model.set('dateStart', Date.now());
                            model.set('score', 0);
                            model.set('state', 1);
                            model.set('loading', false);
                            resolve(q);
                        });
                }else{
                    console.info("Model Game -- Game is not over");
                    reject();
                }
            });
        },

        /*
        getNewQuestion : 
            Method is called toget a new question
            In case of error, state is set to 3 (error).
        */

        getNewQuestion: function(){
            console.info("Model Game -- get New Question");
            var model = this;
            return new Promise(function(resolve, reject){
                var question = new DaMovieQuizz.Models.Question();
                question.fetchNewQuestion().then(function(q){
                    model.set('question', q);
                    resolve(q);
                }).catch(function(error){
                    console.info(error);
                    model.set('state', 3);
                    reject();
                });
            });
        },

        /*
            incrementScoreAndFetchNewQuestion : 
           Get new question and increment score.
        */

        incrementScoreAndFetchNewQuestion: function(){
            this.set('loading', true);
            var model = this;
            return new Promise(function(resolve, reject){
                model.getNewQuestion().
                    then(function(q){
                        model.set('score', model.get('score')+1);
                        model.set('loading', false);
                        resolve(q);
                    });
            });
        },

        /*
            getDuration
            get the duration of the game in seconds
        */

        getDuration: function(){
            if(this.get('state') == 1){
                return Math.floor((Date.now() - this.get('dateStart'))/1000);
            }else if(this.get('state') == 2){
                return Math.floor((this.get('dateEnd') - this.get('dateStart'))/1000);
            }
            return 0;
        },
    });

})();
