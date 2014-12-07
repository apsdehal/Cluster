var $ = require('jquery');
var Handlebars = require("../lib/Handlebars.js")
var RowTemplate = require("../templates/row.hbs");
var SidebarTemplate = require('../templates/sidebar.hbs');
var MainBoxTemplate = require('../templates/main-box.hbs');
var AppControlTemplate = require('../templates/app-control.hbs');
var BoxTemplate = require('../templates/partials/box.hbs')

module.exports = Designer;

function Designer() {
	this.rowHtml = RowTemplate(); 
	this.sidebarHtml = SidebarTemplate(); 
	this.mainBoxHtml = MainBoxTemplate(); 
	this.serverBoxHtml = BoxTemplate(); 
}

Designer.prototype.addRow = function() {
	$('body .main .main-box').append(this.rowHtml);
};

Designer.prototype.startup = function() {
	$('body .main').prepend(this.sidebarHtml);
	$('body .main').append(this.mainBoxHtml);
};

Designer.prototype.addAppControl = function(name) {
	var renderedHtml = AppControlTemplate(name);
	$('.app-controls').append(renderedHtml);
};

Designer.prototype.addServerBox = function() {
	$('.cluster-row').last().append(this.serverBoxHtml);
};

Designer.prototype.deleteRow = function() {
	$('.cluster-row').last().remove();
};

Designer.prototype.deleteServerBox = function() {
	$('.box').last().remove();
};