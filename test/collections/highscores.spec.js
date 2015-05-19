/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Highscores Collection', function () {

    beforeEach(function () {
        this.HighscoresCollection = new DaMovieQuizz.Collections.Highscores();
        this.HighscoresCollection.each(function(model) {
        	if(model){
        		model.destroy();
        	}
	    });
    });

    describe('Is Highscore', function () {
        it('0 is not highscore', function () {
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
          	assert(!this.HighscoresCollection.isHighscore(0));
        });

        it('11 is highscore', function () {
          this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
          assert(this.HighscoresCollection.isHighscore(12));
        });
	});

	 describe('Is in ten best Highscore', function () {
	 	it('0 is in ten highscore when there is no highscore', function () {
        	this.HighscoresCollection.each(function(model) {
	        	if(model){
	        		model.destroy();
	        	}
		    });
          	assert(this.HighscoresCollection.isTopTenHighscore(0, 10));
        });

        it('0 is not in ten highscore', function () {
        	this.HighscoresCollection.each(function(model) {
	        	if(model){
	        		model.destroy();
	        	}
		    });
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
          	assert(!this.HighscoresCollection.isTopTenHighscore(0, 10));
        });

        it('5 is in ten highscore', function () {
        	this.HighscoresCollection.each(function(model) {
	        	if(model){
	        		model.destroy();
	        	}
	    	});
          	this.HighscoresCollection.create({pseudo: "test", score: 1, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 2, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 3, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 4, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 5, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 6, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 7, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 8, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 9, duration: 10});
        	this.HighscoresCollection.create({pseudo: "test", score: 10, duration: 10});
        	console.log(this.HighscoresCollection)
          	assert(this.HighscoresCollection.isTopTenHighscore(5, 10));
        });
	});
});
