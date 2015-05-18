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
        },

        initialize: function(){
            
        },

        /*
        startGame : 
            Method is called to start the game.
            Score is set to 0.
        */

        startGame: function(){
            console.log("Model Game -- Start Game");
            var model = this;
            if(this.get('state') == 0){
                this.getNewQuestion(function(){
                    model.set('state', 1);
                })
            }else{
                console.log("Model Game -- Game is already launched");
            }
        },
        
        /*
        stopGame : 
            Method is called to stop the game.
            State is set to 2 (game over).
        */

        stopGame: function(){
            console.log("Model Game -- Stop Game");
            if(this.get('state') == 1){
                this.set('state', 2);
            }else{
                console.log("Model Game -- Game is not launched");
            }
        },

        /*
        restartGame : 
            Method is called to restart the game.
            State is set to 1 (play).
            Score is set to 0.
        */

        restartGame: function(){
            console.log("Model Game -- Retart Game");
            var model = this;
            if(this.get('state') == 2 || this.get('state') == 3){
                this.getNewQuestion(function(){
                    model.set('state', 1);
                    model.set('score', 0);
                });
            }else{
                console.log("Model Game -- Game is not over");
            }
        },

        /*
        getNewQuestion : 
            Method is called toget a new question
            In case of error, state is set to 3 (error).
        */

        getNewQuestion: function(callback){
            console.log("Model Game -- get New Question");
            var model = this;
            var question = new DaMovieQuizz.Models.Question();
            question.fetchNewQuestion().then(function(q){
                model.set('question', q);
                callback();
            }).catch(function(error){
                console.log(error);
                model.set('state', 3);
            });
        },

        /*
        incrementScoreAndFetchNewQuestion : 
           Get new question and increment score.
        */

        incrementScoreAndFetchNewQuestion: function(){
            this.set('loading', true);
            var model = this;
            this.getNewQuestion(function(){
                model.set('score', model.get('score')+1);
                model.set('loading', false);
            });
        }
    });

})();
