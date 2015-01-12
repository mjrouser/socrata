define(['leaflet'], function(leaflet){


var map = L.map('dataMap').setView([39.39, -98.59], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
	{
	  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	  maxZoom: 13,
	  minZoom: 3

	}).addTo(map);

$.getJSON('app/data/growthrate_merge.geojson', function(data) {
		L.geoJson(data).addTo(map);
});

var overlayMaps = {

	"1966-1969" : 66,
	"1973-1979" : 73,
	"1990-2000" : 90,
	"1960-2004" : 60,
};

L.control.layers(overlayMaps).addTo(map);

});