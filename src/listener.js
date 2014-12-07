var $ = require('jquery');
var Allocator = require('./allocator.js')
var Designer = require('./designer.js')
module.exports = Listener;

function Listener() {
	this.allocator = new Allocator();
	this.designer = new Designer();
	this.listen();
};

Listener.prototype.listen = function() {
	this.listenToClickEvents();
};

Listener.prototype.listenToClickEvents = function() {
	var self = this;
	$('body').on('click', '.add-server-button', function () {
		if(self.allocator.servers.length % 4 == 0) {
			self.designer.addRow();
		} else {
			self.designer.addServerBox();
		}
		self.allocator.addServer();
	});
	$('body').on('click', '.destroy-server-button', function () {
		if(self.allocator.servers.length % 4 == 1) {
			self.designer.deleteRow();
		} else {
			self.designer.deleteServerBox();
		}
		self.allocator.destroyServer();
	});
};
