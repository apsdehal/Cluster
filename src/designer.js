var $ = require('jquery');

var App = require("./app.js");
var Handlebars = require("../lib/Handlebars.js")
var RowTemplate = require("../templates/row.hbs");
var SidebarTemplate = require('../templates/sidebar.hbs');
var MainBoxTemplate = require('../templates/main-box.hbs');
var AppControlTemplate = require('../templates/app-control.hbs');
var BoxTemplate = require('../templates/partials/box.hbs');
var AppTemplate = require('../templates/app.hbs');

module.exports = Designer;

function Designer() {
	this.rowHtml = RowTemplate(); 
	this.sidebarHtml = SidebarTemplate(); 
	this.mainBoxHtml = MainBoxTemplate(); 
	this.serverBoxHtml = BoxTemplate(); 
	this.apps = {};
}

Designer.prototype.addRow = function() {
	$('body .main .main-box').append(this.rowHtml);
	var added = $('.box').last();
	return added;
};

Designer.prototype.startup = function() {
	$('body .main').prepend(this.sidebarHtml);
	$('body .main').append(this.mainBoxHtml);
	this.addApps();
};

Designer.prototype.addApps = function() {
	this.addApp('Hadoop', 'Hd', this.generateColor());
	this.addApp('Rails', 'Rb', this.generateColor());
	this.addApp('Cronos', 'Cr', this.generateColor());
	this.addApp('Spark', 'Sp', this.generateColor());
	this.addApp('Storm', 'St', this.generateColor());
	this.addApp('Gitlab', 'Gt', this.generateColor());
};

Designer.prototype.addApp = function(name, shortname, color) {
	this.apps[name] = new App(name, shortname, color);
	this.addAppControl(name);
};

Designer.prototype.addAppControl = function(name) {
	var data = {name: name};
	var renderedHtml = AppControlTemplate(data);
	$('.app-controls').append(renderedHtml);
};

Designer.prototype.addServerBox = function() {
	$('.cluster-row').last().append(this.serverBoxHtml);
	var added = $('.box').last();
	return added;
};

Designer.prototype.deleteRow = function() {
	$('.cluster-row').last().remove();
};

Designer.prototype.deleteServerBox = function() {
	$('.box').last().remove();
};

Designer.prototype.generateColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
};

Designer.prototype.setAppView = function(app, view) {
	view.append(AppTemplate(app));
};

Designer.prototype.deleteAppView = function(app, view) {
	var children = view.find('.app-box');
	for(var i = children.length - 1; i >= 0; i--){
		if($(children[i]).children('.name').html() == app.name) {
			$(children[i]).remove();
			break;
		}
	}
};