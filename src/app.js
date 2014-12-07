var $ = require('jquery');

module.exports = App;

function App(name, shortName, color) {
	this.name = name;
	this.shortName = shortName;
	this.color = color;
}