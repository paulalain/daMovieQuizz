this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/highscores.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="highscore-div">\n\t<h1>Hall of fame</h1>\n\t<table class="table table-striped">\n\t\t<tr>\n\t\t\t<th>#</th>\n\t\t\t<th>Pseudo</th>\n\t\t\t<th>Score</th>\n\t\t\t<th>Duration</th>\n\t\t</tr>\n\t\t<tbody>\n\t\t\t';
 _.each(highscores, function(highscore){ ;
__p += '\n\t\t\t    <tr>\n\t\t\t    \t<td>#</td>\n\t\t\t    \t<td>' +
((__t = ( highscore.get('pseudo') )) == null ? '' : __t) +
'</td>\n\t\t\t    \t<td>' +
((__t = ( highscore.get('score') )) == null ? '' : __t) +
'</td>\n\t\t\t    \t<td>' +
((__t = ( highscore.get('duration') )) == null ? '' : __t) +
'</td>\n\t\t\t    </tr>\n\t\t\t';
 }); ;
__p += '\n\t\t</tbody>\n\t</table>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/menu.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-inverse">\r\n  <div class="container-fluid">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class="navbar-header">\r\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\r\n        <span class="sr-only">Toggle navigation</span>\r\n        <span class="icon-bar"></span>\r\n        <span class="icon-bar"></span>\r\n        <span class="icon-bar"></span>\r\n      </button>\r\n      <a class="navbar-brand" href="#">Da Movie Quizz</a>\r\n    </div>\r\n\r\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\r\n      <ul class="nav navbar-nav">\r\n          <li role="presentation" class="' +
((__t = ( page == 'playGame' ?  'active' : '' )) == null ? '' : __t) +
'"><a href="#">Jouer</a></li>\r\n          <li role="presentation" class="' +
((__t = ( page == 'highscores' ?  'active' : '' )) == null ? '' : __t) +
'"><a href="#highscores">Highscores</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_duration.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( duration )) == null ? '' : __t) +
'\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_error.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="text-center">\r\n    <p>An error occured, please try to play later...</p>\r\n    <button id="restart" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-repeat"> </span> Play again</button>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_game_over.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="text-center">\r\n    <p>Game Over! Sorry, that\'s not the correct answer...</p>\r\n    <p>Your score: ' +
((__t = ( score )) == null ? '' : __t) +
', your time ' +
((__t = ( duration )) == null ? '' : __t) +
'</p>\r\n    <button id="restart" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-repeat"> </span> Play again</button>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_init.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="text-center">\r\n\t<button id="startgame" class="btn btn-info btn-lg">\r\n\t\t<span class="glyphicon glyphicon-thumbs-up"></span> \r\n\t\t Start Game\r\n\t </button>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_loading.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="text-center">\r\n\t<p>\r\n\t\tLoading...\r\n\t</p>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/playGame_play.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 text-center">\r\n    <div id="scoreBoard">\r\n        <span>Score: ' +
((__t = ( score )) == null ? '' : __t) +
'</span>\r\n        <div id="timer"></div>\r\n    </div>\r\n</div>\r\n<div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">\r\n    <div id="gameContent">\r\n        <div >\r\n            <h3>Does this actor play in this movie?</h3>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\r\n                <img src="' +
((__t = ( actorImage )) == null ? '' : __t) +
'" class="img_poster" />\r\n            </div>\r\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\r\n                <img src="' +
((__t = ( movieImage )) == null ? '' : __t) +
'" class="img_poster" />\r\n            </div>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\r\n                 <h4 id="actorName">' +
((__t = ( actorName )) == null ? '' : __t) +
'</h4>\r\n            </div>\r\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\r\n                <h4 id="movieTitle">' +
((__t = ( movieTitle )) == null ? '' : __t) +
'</h4>\r\n            </div>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\r\n                 <button id="yes" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-ok"> </span> Yes</button>\r\n            </div>\r\n            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">\r\n                 <button id="no" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove"> </span> No</button>\r\n            </div>\r\n        </div> \r\n    </div> \r\n</div>';

}
return __p
};