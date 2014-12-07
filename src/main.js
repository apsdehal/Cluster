var $ = require('jquery');
var Designer = require('./designer.js');
var Listener = require('./listener.js');

$(document).ready(function () {
	var designer = new Designer();
	designer.startup();
	var listener = new Listener(designer);
});