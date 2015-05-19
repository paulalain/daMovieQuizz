/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Collections = DaMovieQuizz.Collections || {};

(function () {
    'use strict';

    /*
    	Collection of highscores
    */

    DaMovieQuizz.Collections.Highscores = Backbone.Collection.extend({

        model: DaMovieQuizz.Models.Highscore,
        localStorage: new Backbone.LocalStorage("highscores"),

        initialize: function(){
            this.fetch();
        },

        comparator: function(highscore1, highscore2){
            if(highscore1.get('score') == highscore2.get('score')){
                return highscore1.get('duration') - highscore2.get('duration')
            }else{
                return highscore2.get('score') - highscore1.get('score')
            }
        },

        /*
            isHighscore
            Return true if it's the highscore
        */

        isHighscore: function(score){
            console.info("Collection Highscores - isHighscore")
            var highscore = this.first(1);
            if(highscore && highscore[0]){
                return score > highscore[0].get('score');
            }else{
                console.info('true');
                return true;
            }
        },

        /*
            isTopTenHighscore
            Return true if it's in the ten best highscore
        */

        isTopTenHighscore: function(score, duration){
            console.info("Collection Highscores - isTopTenHighscore")
            var highscoreTopTen = this.first(10);
            var max = highscoreTopTen.length;
            
            if(!max || max < 10){
                //case there is no one
                return true;
            }else if(highscoreTopTen[9]){
                if(score == highscoreTopTen[9].get('score')){
                    return duration < highscoreTopTen[9].get('duration');
                }else{
                    return score > highscoreTopTen[9].get('score');
                }
            }
            
            return false;
        }

    });

})();
