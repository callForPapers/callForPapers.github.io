requirejs.config({
	paths: {
		'knockout': ['http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.debug'],
		'jquery': ['http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min'],
		'bootstrap': ['http://ajax.aspnetcdn.com/ajax/bootstrap/3.3.5/bootstrap.min'],
		'bootstrap-table' : ['http://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.9.1/bootstrap-table' ]
	},
	shim: {
	 	'bootstrap' : ['jquery'],
		'bootstrap-table' : [ 'bootstrap' ]
	}
});

requirejs(["bootstrap-table", "app/main"]);