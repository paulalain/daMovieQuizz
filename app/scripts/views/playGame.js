/*global DaMovieQuizz, Backbone, JST*/

DaMovieQuizz.Views = DaMovieQuizz.Views || {};

/*
    formatDate
    format date in 00:00:00
*/
function formatDate(timestamp){
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    hours = Math.floor(timestamp/3600);
    minutes = Math.floor(timestamp/60);
    seconds = timestamp % 60;

    return ((hours < 10) ? '0' : '') + hours + ':'
            + ((minutes < 10) ? '0' : '') + minutes + ':' 
            + ((seconds < 10) ? '0' : '') + seconds;
}

(function () {
    'use strict';

    /*
        Play view
            * view init game
            * view play game
            * view game over
            * view game error
            * view game loading
    */

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

            // inner view timer
            this.inner = new DaMovieQuizz.Views.TimerInnerView({ model : this.model });
            this.render();
        },

        render: function(){
            $("#timer").empty();
            if(this.model.get('state') == 0){
                this.$el.html(this.template_init({}));
            }else if (this.model.get('state') == 1){
                this.$el.html(this.template_play({ 
                                                    score: this.model.get('score'), 
                                                    movieTitle: this.model.get('question').get('movie').name,
                                                    movieImage: this.model.get('question').get('movie').image,
                                                    actorName: this.model.get('question').get('actor').name,
                                                    actorImage: this.model.get('question').get('actor').image,
                                                }));
                $("#timer").append(this.inner.$el);
                this.inner.render();
            }else if(this.model.get('state') == 2){
                this.$el.html(this.template_game_over({
                                                         score: this.model.get('score'), 
                                                         duration: formatDate(this.model.getDuration()),
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
            console.info("View Game -- Start Game")
            this.model.startGame();
        },

        restart: function(){
            console.info("View Game -- Restart Game")
            this.model.restartGame();
        },

        clickYes: function() {
            console.info("View Game -- Yes Clicked")
            this.clickAnswer(true);
        },

        clickNo: function() {
            console.info("View Game -- No Clicked")
            this.clickAnswer(false);
        },

        clickAnswer: function(value){
            console.info("PlayGame View -- Click Answer");
            if(this.model.get('question').validateAnswer(value)){
                // continue
                console.info("PlayGame View -- Correct Answer")
                this.model.incrementScoreAndFetchNewQuestion();
            }else{
                console.info("PlayGame View -- Wrong Answer")
                this.model.stopGame();
            }
        }
    });

    
    /*
        Inner view for the timer
    */

    DaMovieQuizz.Views.TimerInnerView = Backbone.View.extend({
        template_duration: JST['app/scripts/templates/playGame_duration.ejs'],

        initialize: function(){
        },

        render: function() {
            if (this.model.get('state') == 1){
                console.info("View Play Game -- Render timer")
                // only if we are in game mode
                var object = this;

                this.$el.html(this.template_duration({
                                                 duration: formatDate(this.model.getDuration()),
                                             }));
                // call render in 1s
                setTimeout(function(){ 
                    object.render();
                }, 1000);
            }
        }
    });

})();
