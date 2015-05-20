/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Game Model', function () {

    beforeEach(function () {
        this.GameModel = new DaMovieQuizz.Models.Game();
    });

	describe('Start game', function () {
        it('state == 1', function () {
          var model = this.GameModel;
          model.startGame()
            .then(function(g){
              assert.equal(model.get('state'), 1);
            }, function(error){
              assert(false, "Error on start game");
            });
          
        });

        it('score == 0', function () {
          var model = this.GameModel;
          model.startGame()
          .then(function(g){
              assert.equal(model.get('score'), 0);
            }, function(error){
               assert(false, "Error on start game");
            });
        });
	});

	describe('Stop game', function () {
        it('state == 2', function () {
          var model = this.GameModel;

          model.startGame()
          .then(function(g){
            model.stopGame().
              then(function(g){
                 assert.equal(model.get('state'), 2);
              }, function(error){
                 assert(false, "Error on stop game");
              });
          }, function(error){
            assert(false, "Error on start game");
          });
        });
	});

	describe('Restart game', function () {
        it('state == 1', function () {
          var model = this.GameModel;
          this.GameModel.startGame()
          .then(function(g){
            model.stopGame()
              .then(function(g){
                model.restartGame()
                  .then(function(g){
                    assert.equal(model.get('state'), 1);
                  }, function(error){
                    assert(false, "Error on restart game");
                  });
              }, function(error){
                assert(false, "Error on stop game");
              });
          }, function(error){
            assert(false, "Error on start game");
          });
        });

        it('score == 0', function () {
          var model = this.GameModel;
          model.startGame()
            .then(function(g){
              model.stopGame()
                .then(function(g){
                  model.restartGame()
                    .then(function(g){
                      assert.equal(model.get('score'), 0);
                    }, function(error){
                      assert(false, "Error on restart game");
                    });
                }, function(error){
                  assert(false, "Error on stop game");
                });
            }, function(error){
              assert(false, "Error on start game");
            });
        });
	});
    
    describe('Increment Score And Fetch New Question', function () {
        it('score > 0', function () {
          var model = this.GameModel;
          this.GameModel.startGame()
            .then(function(g){
              model.incrementScoreAndFetchNewQuestion()
                .then(function(g){
                  assert.equal(this.GameModel.get('state'), 1);
                }, function(error){
                  assert(false, "Error fetch new question");
                })
             }, function(error){
                  assert(false, "Error on start game");
            });
      });

        it('question != null', function () {
          var model = this.GameModel;
          this.GameModel.startGame()
            .then(function(g){
              model.incrementScoreAndFetchNewQuestion()
                .then(function(g){
                  assert.notEqual(this.GameModel.get('question'), null);
                }, function(error){
                  assert(false, "Error fetch new question");
                })
            }, function(error){
              assert(false, "Error on start game");
            });
        });
	 });
});
