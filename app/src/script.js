define(['knockout', 'leaflet', 'text!views/leaflet-map.html'], function(ko, L, htmlString){

	    function leafMap (){
	    		var self = this;
	    		//Create Leaflet map
 	 		self.map = L.map('dataMap').setView([39.39, -98.59], 4);
 	 		//Variable containing the overlays
 	 		self.overlayMaps = {

				'1966-1969' : 66,
				'1973-1979' : 73,
				'1990-2000' : 90,
				'1960-2004' : 60
			};
			//
			self.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', 
				{
	  			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	  			maxZoom: 13,
	  			minZoom: 3

			}).addTo(this.map);

			self.$.getJSON('data/growthrate_merge.geojson', function(data) {
				L.geoJson(data).addTo(this.map);
			});

			

			self.L.control.layers(this.overlayMaps).addTo(this.map);
		}
		
	
		return { viewModel: leafMap, template: htmlString };


});