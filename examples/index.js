var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.Routing.control({
	waypoints: [
		L.latLng(57.74, 11.94),
		L.latLng(57.6792, 11.949)
	],
	geocoder: L.Control.Geocoder.nominatim(),
	router: L.Routing.here('here app id', 'here app code'),
	routeWhileDragging: false
}).addTo(map);
