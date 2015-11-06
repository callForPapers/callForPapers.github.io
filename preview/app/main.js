// Start the main logic
require(['knockout', 'app/model', 'libs/domReady!'], function (ko, model) {
	ko.applyBindings(new model());
});