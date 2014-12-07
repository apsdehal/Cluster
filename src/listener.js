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
		self.allocator.addServer(view);
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
		var apps = self.allocator.destroyServer();
		for(var i in apps) {
			self.addApp(apps[i]);
		}
	});
};

Listener.prototype.listenToAppAdd = function() {
	var self = this, name, app;
	$('body').on('click', '.add-app', function () {
		name = $(this).parent().prev().html();
		app = self.designer.apps[name];
		self.addApp(app);
	});
};

Listener.prototype.listenToAppDestroy = function() {
	var self = this, name, app;
	$('body').on('click', '.destroy-app', function () {
		name = $(this).parent().prev().html();
		app = self.designer.apps[name];
		self.deleteApp(app);
	})
};

Listener.prototype.addApp = function(app) {
	var view = this.allocator.addApp(app);
	this.designer.setAppView(app, view);
};

Listener.prototype.deleteApp = function(app) {
	var view = this.allocator.destroyApp(app);
	this.designer.deleteAppView(app, view);

};