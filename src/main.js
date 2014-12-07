var $ = require('jquery');
var Designer = require('./designer.js');

$(document).ready(function () {
	var designer = new Designer();
	designer.startup();
});