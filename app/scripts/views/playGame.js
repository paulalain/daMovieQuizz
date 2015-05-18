/*global DaMovieQuizz, Backbone, JST*/

DaMovieQuizz.Views = DaMovieQuizz.Views || {};

(function () {
    'use strict';

    DaMovieQuizz.Views.PlayGame = Backbone.View.extend({

        template_init: JST['app/scripts/templates/playGame_init.ejs'],
        template_play: JST['app/scripts/templates/playGame_play.ejs'],
        template_game_over: JST['app/scripts/templates/playGame_game_over.ejs'],
        template_error: JST['app/scripts/templates/playGame_error.ejs'],
        template_loading: JST['app/scripts/templates/playGame_loading.ejs'],

       initialize: function() {
            this.listenTo(this.model, 'change:score', this.render);
            this.listenTo(this.model, 'change:state', this.render);
            this.listenTo(this.model, 'change:loading', this.renderLoading);

            //Render game view
            this.render();
        },

        render: function(){
            if(this.model.get('state') == 0){
                this.$el.html(this.template_init({}));
            }else if (this.model.get('state') == 1){
                this.$el.html(this.template_play({ 
                                                    score: this.model.get('score'), 
                                                    movieTitle: this.model.get('question').get('movie').name,
                                                    movieImage: this.model.get('question').get('movie').image,
                                                    actorName: this.model.get('question').get('actor').name,
                                                    actorImage: this.model.get('question').get('actor').image
                                                }));
            }else if(this.model.get('state') == 2){
                this.$el.html(this.template_game_over({
                                                         score: this.model.get('score'), 
                                                     }));
            }else{
                 this.$el.html(this.template_error());
            }

            return this;
        },

        renderLoading: function(){
            if(this.model.get('loading')){
                this.$el.html(this.template_loading());
            }else{
                this.render();
            }

            return this;
        },

        events: {
            "click #startgame": "startGame",
            "click #yes": "clickYes",
            "click #no": "clickNo",
            "click #restart": "restart"
        },
        startGame: function(){
            console.log("View Game -- Start Game")
            this.model.startGame();
        },
        restart: function(){
            console.log("View Game -- Restart Game")
            this.model.restartGame();
        },
        clickYes: function() {
            console.log("View Game -- Yes Clicked")
            this.clickAnswer(true);
        },
        clickNo: function() {
            console.log("View Game -- No Clicked")
            this.clickAnswer(false);
        },
        clickAnswer: function(value){
            console.log("PlayGame View -- Click Answer");
            if(this.model.get('question').validateAnswer(value)){
                // continue
                console.log("PlayGame View -- Correct Answer")
                this.model.incrementScoreAndFetchNewQuestion();
            }else{
                console.log("PlayGame View -- Wrong Answer")
                this.model.stopGame();
            }
        }
    });

})();
