/*global DaMovieQuizz, Backbone, JST*/

DaMovieQuizz.Views = DaMovieQuizz.Views || {};

(function () {
    'use strict';

    /*
        View Menu
        Display menu
    */
    
    DaMovieQuizz.Views.Menu = Backbone.View.extend({

        template: JST['app/scripts/templates/menu.ejs'],

        initialize: function() {
            this.render();
        },
        render: function(){
            this.$el.html(this.template({}));
        }
    });

})();
