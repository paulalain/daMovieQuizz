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
            //set listeners
            this.listenTo(this.model, 'change:page', this.render);

            this.render();
        },

        render: function(){
            console.info("Menu view -- Render");
            this.$el.html(this.template({ page : this.model.get('page') }));
        }
    });

})();
