this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/menu.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-inverse">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Da Movie Quizz</a>\n    </div>\n\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n          <li role="presentation" class="active"><a href="#">Jouer</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_error.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-centered">\n    <p>An error occured, please try to play later...</p>\n    <button id="restart" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-repeat"> </span> Play again</button>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_game_over.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="text-center">\n    <p>Game Over! Sorry, that\'s not the correct answer...</p>\n    <p>Your score: ' +
((__t = ( score )) == null ? '' : __t) +
'</p>\n    <button id="restart" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-repeat"> </span> Play again</button>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_init.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="text-center">\n\t<button id="startgame" class="btn btn-info btn-lg">\n\t\t<span class="glyphicon glyphicon-thumbs-up"></span> \n\t\t Start Game\n\t </button>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_loading.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-centered">\n\t<p>\n\t\tLoading...\n\t</p>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_play.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">\n    <div id="scoreBoard">\n        <span>Score: ' +
((__t = ( score )) == null ? '' : __t) +
'</span>\n    </div>\n</div>\n<div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">\n    <div id="gameContent">\n        <div >\n            <h3>Does this actor play in this movie?</h3>\n        </div>\n        <div class="row">\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\n                <img src="' +
((__t = ( actorImage )) == null ? '' : __t) +
'" class="img_poster" />\n            </div>\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\n                <img src="' +
((__t = ( movieImage )) == null ? '' : __t) +
'" class="img_poster" />\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\n                 <h4 id="actorName">' +
((__t = ( actorName )) == null ? '' : __t) +
'</h4>\n            </div>\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\n                <h4 id="movieTitle">' +
((__t = ( movieTitle )) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\n                 <button id="yes" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-ok"> </span> Yes</button>\n            </div>\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\n                 <button id="no" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove"> </span> No</button>\n            </div>\n        </div> \n    </div> \n</div>';

}
return __p
};