requirejs.config({
	paths: {
		'main': 'main',
		'knockout': 'lib/knockout-3.2.0',
		'jquery': 'lib/jquery-2.1.1.min',
		'bootstrap': 'lib/bootstrap/bootstrap.min',
		'nvd3': 'lib/d3/nv.d3.min',
		'd3': 'lib/d3/d3.min',
		'leaflet': 'lib/leaflet-0.7.3/leaflet',
		'LMap': 'src/script',
		'chart': 'src/chart2',
		'carto' : 'src/carto'
	},
	shim: {
		'bootstrap': { deps: ['jquery']},
		'nvd3': { deps: ['d3']}

	}

});

requirejs(['bootstrap', 'LMap'], function(bootstrap, LMap){

});