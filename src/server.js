var $ = require('jquery');

module.exports = Server;

function Server(view) {
	this.name = null;
	this.view = view;
	this.apps = [];
};

Server.prototype.addApp = function(app) {
	this.apps.push(app);
	return this.view;
};

Server.prototype.removeApp = function(app) {
	var toBeRemoved = -1;
	for(var i in this.apps) {
		if(app.name == this.apps[i].name) {
			toBeRemoved = i;
		}
	}
	this.apps.splice(toBeRemoved,1);
	return this.view;
};

