var map = L.map('map').setView([39.39, -98.59], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
	{
	  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	  maxZoom: 13,
	  minZoom: 3

	}).addTo(map);

$.getJSON('growthrate_merge.geojson', function(data) {
		L.geoJson(data).addTo(map);
});