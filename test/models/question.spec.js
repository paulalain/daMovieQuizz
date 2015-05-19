/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Question Model', function () {

    beforeEach(function () {
        this.QuestionModel = new DaMovieQuizz.Models.Question();
    });

    describe('fetchNewQuestion', function () {
        it('fetchNewQuestion by rand', function () {
          this.QuestionModel.fetchNewQuestion()
            .then(function(q){
              assert.notEqual(q.get('actor'), null);
              assert.notEqual(q.get('movie'), null);
            }, function(error){
              assert(false);
            });
        });
    });

    describe('Validate answer', function () {
        it('answer == false', function () {
          assert(this.QuestionModel.validateAnswer(false));
        });
    });
});
