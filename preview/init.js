requirejs.config({
	paths: {
		'knockout': ['http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.debug'],
		'jquery': ['http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min'],
		'bootstrap': ['http://ajax.aspnetcdn.com/ajax/bootstrap/3.3.5/bootstrap.min']
	},
	shim: {
	 	/* Set bootstrap dependencies (just jQuery) */
	 	'bootstrap' : ['jquery']
	}
});

requirejs(["bootstrap", "app/main"]);