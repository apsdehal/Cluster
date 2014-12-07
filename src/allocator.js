var $ = require('jquery');
var Server = require('./server.js');

module.exports = Allocator;

function Allocator() {
	this.servers = [];
};

Allocator.prototype.addServer = function() {
	this.servers.push(new Server());
};