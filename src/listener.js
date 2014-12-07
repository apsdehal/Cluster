var $ = require('jquery');
var Allocator = require('./allocator.js')
var Designer = require('./designer.js')
module.exports = Listener;

function Listener(designer) {
	this.allocator = new Allocator();
	this.designer = designer;
	this.listen();
};

Listener.prototype.listen = function() {
	this.listenToClickEvents();
};

Listener.prototype.listenToClickEvents = function() {
	this.listenToAddServer();
	this.listenToDestroyServer();
	this.listenToAppAdd();
	this.listenToAppDestroy();
};

Listener.prototype.listenToAddServer = function() {
	var view, self = this;
	$('body').on('click', '.add-server-button', function () {
		if(self.allocator.servers.length % 4 == 0) {
			view = self.designer.addRow();
		} else {
			view = self.designer.addServerBox();
		}
		self.allocator.addServer();
	});

};

Listener.prototype.listenToDestroyServer = function() {
	var self = this, view;
	$('body').on('click', '.destroy-server-button', function () {
		if(self.allocator.servers.length % 4 == 1) {
			self.designer.deleteRow();
		} else {
			self.designer.deleteServerBox();
		}
		self.allocator.destroyServer();
	});
};

Listener.prototype.listenToAppAdd = function() {
	var self = this, name, app;
	$('body').on('click', '.add-app', function () {
		name = $(this).parent().prev().html();
		app = self.designer[name];
		self.allocator.startApp(app);
	})
};

Listener.prototype.listenToAppDestroy = function() {
	var self = this, name, app;
	$('body').on('click', '.destroy-app', function () {
		name = $(this).parent().prev().html();
		app = self.designer[name];
		self.allocator.destroyApp(app);
		self.allocator.dDestroyroyApp(app);
	})
};