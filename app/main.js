requirejs.config({
	paths: {
		'main': 'main',
		'knockout': 'lib/knockout-3.2.0',
		'jquery': 'lib/jquery-2.1.1.min',
		'bootstrap': 'lib/bootstrap/bootstrap.min',
		'nvd3': 'lib/d3/nv.d3.min',
		'd3': 'lib/d3/d3.min',
		'leaflet': 'lib/leaflet-0.7.3/leaflet',
		'cartoDB': 'http://libs.cartocdn.com/cartodb.js/v3/cartodb.js',
		'LMap': 'src/script',
		'chart': 'src/chart2',
		'carto' : 'src/carto',
		'text' : 'src/text'
	},
	shim: {
		'bootstrap': { deps: ['jquery'], exports: 'jquery'},
		'nvd3': { deps: ['d3'], exports: 'nv'},
		'leaflet': { exports: 'L' }

	}

});

requirejs(['bootstrap', 'knockout', 'LMap', 'text'], function(bootstrap, ko, LMap){
	ko.components.register('leaflet-map', {
			viewModel: {require: 'LMap'},
			template: 'views/leaflet-map.html'
		});

});