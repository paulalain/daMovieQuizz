/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Movie Model', function () {

    beforeEach(function () {
        this.MovieModel = new DaMovieQuizz.Models.Movie();
    });
    
    describe('Movie Fetch credit', function () {
        it('Fetch credit by rand', function () {
          this.MovieModel.fetchOneCreditByRand(20000)
            .then(function(c){
              assert.notEqual(c.name, null);
            }, function(error){
              assert(false);
            });
        });

        it('Fetch credit', function () {
          this.MovieModel.fetchCredits(20000)
            .then(function(c){
              assert.notEqual(c.length, 14);
            }, function(error){
              assert(false);
            });
        });
    });

    describe('Movie Fetch', function () {
        it('Fetch by rand', function () {
          this.MovieModel.fetchByRand()
            .then(function(m){
              assert.notEqual(m.name, null);
            }, function(error){
              assert(false);
            });
        });
    });
});

