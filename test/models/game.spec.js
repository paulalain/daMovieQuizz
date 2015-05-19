/*global beforeEach, describe, it, assert, expect  */
'use strict';

function sleep(milliseconds){
    var waitUntil = new Date().getTime() + milliseconds;
    while(new Date().getTime() < waitUntil) true;
}

describe('Game Model', function () {

    beforeEach(function () {
        this.GameModel = new DaMovieQuizz.Models.Game();
    });

	describe('Start game', function () {
        it('state == 1', function () {
          this.GameModel.startGame();
          assert.equal(this.GameModel.get('state'), 1);
        });

        it('score == 0', function () {
          this.GameModel.startGame();
          assert.equal(this.GameModel.get('score'), 0);
        });
	});

	describe('Stop game', function () {
        it('state == 2', function () {
          this.GameModel.startGame();
          this.GameModel.stopGame();
          assert.equal(this.GameModel.get('state'), 2);
        });
	});

	describe('Restart game', function () {
        it('state == 1', function () {
          this.GameModel.startGame();
          this.GameModel.stopGame();
          this.GameModel.restartGame();
          assert.equal(this.GameModel.get('state'), 1);
        });
	});
    
    describe('Increment Score And Fetch New Question', function () {
        it('score > 0', function () {
          this.GameModel.startGame();
          this.GameModel.incrementScoreAndFetchNewQuestion();
          assert.isAbove(this.GameModel.get('state'), 0);
        });
	});
});
