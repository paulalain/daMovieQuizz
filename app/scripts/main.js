/*global DaMovieQuizz, $*/

//if debug mode, console log are displayed
var DEBUG = true;

if(!DEBUG){
    if(!window.console) window.console = {};

    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}

DaMovieQuizz = (function() {

    var api = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        content: null,

        init: function () {
            this.content = $("#content");
            'use strict';

            // initialize menu
            ViewsFactory.menu();

            // initialize router
            new DaMovieQuizz.Routers.Router();

            Backbone.history.start();
            return this;
        }
    };
    

    var ViewsFactory = {
        menu: function() {
            if(!this.menuView) {
                this.menuView = new api.Views.Menu({ 
                    el: $("#menu") 
                });
            }
            return this.menuView;
        }
    };

    return api;
})();

$(document).ready(function () {
    'use strict';
    DaMovieQuizz.init();
});
