var $ = require('jquery');
var Server = require('./server.js');

module.exports = Allocator;

function Allocator() {
	this.servers = [];
};

Allocator.prototype.addServer = function(view) {
	this.servers.push(new Server(view));
};

Allocator.prototype.destroyServer = function() {
	this.servers.pop();
};

Allocator.prototype.getBestServer = function() {
	var best;
	var number = -1;
	var min = 2;
	for(var i in this.servers) {
		if(min > this.servers[i].apps.length) {
			number = i;
		}
	}
	return number
};

Allocator.prototype.addApp = function(app) {
	var best = this.getBestServer();
	if(best == -1){
		return 0;
	} else {
		return this.servers[best].addApp(app);
	}
};

Allocator.prototype.removeApp = function(app) {
	var toBeRemovedFrom = this.getToBeRemovedFromServer(app);
	if(toBeRemovedFrom == -1) {
		return 0;
	} else {
		return this.servers[toBeRemovedFrom].removeApp(app);
	}
};

Allocator.prototype.getToBeRemovedFromServer = function(app) {
	var name = app.name;
	var servers = this.servers;
	var app;
	var toBeRemoved = -1;
	for(var i = servers.length-1; i >= 0; i--) {
		app = servers[i].app[1];
		if( app !== undefined && app.name = name) {
			toBeRemoved = i;
			break;
		}
	}
	if(toBeRemoved == -1) {
		for(var i = servers.length-1; i >= 0; i--) {
			app = servers[i].app[0];
			if( app !== undefined && app.name = name) {
				toBeRemoved = i;
				break;
			}
		}	
	}
	return toBeRemoved;
};