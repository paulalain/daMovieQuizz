/*global DaMovieQuizz, Backbone*/

DaMovieQuizz.Collections = DaMovieQuizz.Collections || {};

(function () {
    'use strict';

    /*
    	Collection of highscores
    */

    DaMovieQuizz.Collections.Highscores = Backbone.Collection.extend({

        model: DaMovieQuizz.Models.Highscore,
        //localStorage: new Backbone.LocalStorage('highscores'), // to include

        initialize: function(){
        	this.add({pseudo: "polo", score: '18', duration: '45' });
        	this.add({pseudo: "opopoi", score: '12', duration: '10' });
        	this.add({pseudo: "opopoi", score: '18', duration: '10' });
        	this.add({pseudo: "opopoi", score: '12', duration: '10' });
        	this.add({pseudo: "opopoi", score: '18', duration: '8' });

        },

        comparator: function(highscore){
        	return -highscore.get('score');
        	//return [-highscore.get('score'), highscore.get('duration')];
        },

        filtered: function(expr) {
		    return this.filter(function(contact) {
		      if (contact.matches(expr)) return true;
		    });
		},

    });

})();
