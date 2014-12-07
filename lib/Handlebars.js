/**
*
* This lib is created with a purpose of registring the partials with
* hbsfy single time and then reusing them by simply requiring them
*
**/

var Handlebars = require("hbsfy/runtime");

Handlebars.registerPartial('box', require("../templates/partials/box.hbs"));

module.exports = Handlebars;