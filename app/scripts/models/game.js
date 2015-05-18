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
            
        },

        /*
        startGame : 
            Method is called to start the game.
            Score is set to 0.
        */

        startGame: function(){
            console.info("Model Game -- Start Game");
            var model = this;
            if(this.get('state') == 0){
                this.getNewQuestion(function(){
                    model.set('dateStart', Date.now());
                    model.set('state', 1);
                })
            }else{
                console.info("Model Game -- Game is already launched");
            }
        },
        
        /*
        stopGame : 
            Method is called to stop the game.
            State is set to 2 (game over).
        */

        stopGame: function(){
            console.info("Model Game -- Stop Game");
            if(this.get('state') == 1){
                this.set('dateEnd', Date.now());
                this.set('state', 2);
            }else{
                console.info("Model Game -- Game is not launched");
            }
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
            if(this.get('state') == 2 || this.get('state') == 3){
                this.getNewQuestion(function(){
                    model.set('dateStart', Date.now());
                    model.set('score', 0);
                    model.set('state', 1);
                });
            }else{
                console.info("Model Game -- Game is not over");
            }
        },

        /*
        getNewQuestion : 
            Method is called toget a new question
            In case of error, state is set to 3 (error).
        */

        getNewQuestion: function(callback){
            console.info("Model Game -- get New Question");
            var model = this;
            var question = new DaMovieQuizz.Models.Question();
            question.fetchNewQuestion().then(function(q){
                model.set('question', q);
                callback();
            }).catch(function(error){
                console.info(error);
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
        },

        /*
            getDuration
            get the duration of the game in seconds
        */

        getDuration: function(){
            console.info("Model Game -- Get Duration")
            if(this.get('state') == 1){
                return Math.floor((Date.now() - this.get('dateStart'))/1000);
            }else if(this.get('state') == 2){
                return Math.floor((this.get('dateEnd') - this.get('dateStart'))/1000);
            }
            return 0;
        },
    });

})();
