
var map = L.map('map').setView([13.22, -5.16], 10);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreet map</a> OMB 2021',
});
osm.addTo(map);

var marker = L.marker([13.22, -5.16], {
    draggable :true,
    title: 'REPERE',
    opacity: 0.5,
})
    .addTo(map)
    .bindPopup('<h1>Marker</h1><p>This is the marker text</p>');



var watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});

   watercolor.addTo(map);

var esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: ''
    // 'Tiles &copy; Esri &mdash; Source: Esri'
});

    esri_WorldImagery.addTo(map);

var baseLayers = {
    osm : osm,
    "water color": watercolor,
    "esri Imagery": esri_WorldImagery,
};
L.control.Layers(baseLayers).addTo(map);



$( "p" ).click(function() {
  $( this ).slideUp();
});




// create a red polygon from an array of LatLng points
// var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
//
// var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

// zoom the map to the polygon
// map.fitBounds(polygon.getBounds());



// point.addTo(map);
// 17°00' N 4°00' W

// var marker = L.marker([48.5, -0.09] , 10).addTo(map)
//     .bindPopup('Le texte du marker<br> On peut y mettre du code HTML');


// var ggRoadmap = new L.Google('ROADMAP');
// var ggSatellite = new L.Google('');
// var ggTerrain = new L.Google('TERRAIN');
// var ggHybrid = new L.Google('HYBRID');
//
// map.addLayer(osmLayer); // Le layer par défaut
// map.addControl(new L.Control.Layers( {


//     'OpenStreetMap': osmLayer,
//     'Google Roadmap' : ggRoadmap,
//     'Google Satellite': ggSatellite,
//     'Google Terrain': ggTerrain,
//     'Google Hybrid' : ggHybrid
//     }, {})
// );

// var customIcon = L.icon({
//     iconUrl: 'icon-marker.png',
//     //shadowUrl: 'icon-shadow.png',
//     iconSize:     [64, 64], // taille de l'icone
//     //shadowSize:   [50, 64], // taille de l'ombre
//     iconAnchor:   [32, 64], // point de l'icone qui correspondra à la position du marker
//     //shadowAnchor: [32, 64],  // idem pour l'ombre
//     popupAnchor:  [-3, -76] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
// });
//
// L.marker([48.5, 0.5], {icon: customIcon}).addTo(map);







/*
 * Google layer using Google Maps API
 */

/* global google: true */

// L.Google = L.Layer.extend({
// 	includes: L.Mixin.Events,
//
// 	options: {
// 		minZoom: 0,
// 		maxZoom: 18,
// 		tileSize: 256,
// 		subdomains: 'abc',
// 		errorTileUrl: '',
// 		attribution: '',
// 		opacity: 1,
// 		continuousWorld: false,
// 		noWrap: false,
// 		mapOptions: {
// 			backgroundColor: '#dddddd'
// 		}
// 	},
//
// 	// Possible types: SATELLITE, ROADMAP, HYBRID, TERRAIN
// 	initialize: function(type, options) {
// 		L.Util.setOptions(this, options);
//
// 		this._ready = google.maps.Map !== undefined;
// 		if (!this._ready) L.Google.asyncWait.push(this);
//
// 		this._type = type || 'SATELLITE';
// 	},
//
// 	onAdd: function(map, insertAtTheBottom) {
// 		this._map = map;
// 		this._insertAtTheBottom = insertAtTheBottom;
//
// 		// create a container div for tiles
// 		this._initContainer();
// 		this._initMapObject();
//
// 		// set up events
// 		map.on('viewreset', this._resetCallback, this);
//
// 		//this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
// 		map.on('move', this._update, this);
//
// 		map.on('zoomanim', this._handleZoomAnim, this);
//
// 		//20px instead of 1em to avoid a slight overlap with google's attribution
// 		map._controlCorners.bottomright.style.marginBottom = '20px';
//
// 		this._reset();
// 		this._update();
// 	},
//
// 	onRemove: function(map) {
// 		map._container.removeChild(this._container);
//
// 		map.off('viewreset', this._resetCallback, this);
//
// 		map.off('move', this._update, this);
//
// 		map.off('zoomanim', this._handleZoomAnim, this);
//
// 		map._controlCorners.bottomright.style.marginBottom = '0em';
// 	},
//
// 	getAttribution: function() {
// 		return this.options.attribution;
// 	},
//
// 	setOpacity: function(opacity) {
// 		this.options.opacity = opacity;
// 		if (opacity < 1) {
// 			L.DomUtil.setOpacity(this._container, opacity);
// 		}
// 	},
//
// 	setElementSize: function(e, size) {
// 		e.style.width = size.x + 'px';
// 		e.style.height = size.y + 'px';
// 	},
//
// 	_initContainer: function() {
// 		var tilePane = this._map._container,
// 			first = tilePane.firstChild;
//
// 		if (!this._container) {
// 			this._container = L.DomUtil.create('div', 'leaflet-google-layer leaflet-top leaflet-left');
// 			this._container.id = '_GMapContainer_' + L.Util.stamp(this);
// 			this._container.style.zIndex = 'auto';
// 		}
//
// 		tilePane.insertBefore(this._container, first);
//
// 		this.setOpacity(this.options.opacity);
// 		this.setElementSize(this._container, this._map.getSize());
// 	},
//
// 	_initMapObject: function() {
// 		if (!this._ready) return;
// 		this._google_center = new google.maps.LatLng(0, 0);
// 		var map = new google.maps.Map(this._container, {
// 		    center: this._google_center,
// 		    zoom: 0,
// 		    tilt: 0,
// 		    mapTypeId: google.maps.MapTypeId[this._type],
// 		    disableDefaultUI: true,
// 		    keyboardShortcuts: false,
// 		    draggable: false,
// 		    disableDoubleClickZoom: true,
// 		    scrollwheel: false,
// 		    streetViewControl: false,
// 		    styles: this.options.mapOptions.styles,
// 		    backgroundColor: this.options.mapOptions.backgroundColor
// 		});
//
// 		var _this = this;
// 		this._reposition = google.maps.event.addListenerOnce(map, 'center_changed',
// 			function() { _this.onReposition(); });
// 		this._google = map;
//
// 		google.maps.event.addListenerOnce(map, 'idle',
// 			function() { _this._checkZoomLevels(); });
// 		//Reporting that map-object was initialized.
// 		this.fire('MapObjectInitialized', { mapObject: map });
// 	},
//
// 	_checkZoomLevels: function() {
// 		//setting the zoom level on the Google map may result in a different zoom level than the one requested
// 		//(it won't go beyond the level for which they have data).
// 		// verify and make sure the zoom levels on both Leaflet and Google maps are consistent
// 		if (this._google.getZoom() !== this._map.getZoom()) {
// 			//zoom levels are out of sync. Set the leaflet zoom level to match the google one
// 			this._map.setZoom( this._google.getZoom() );
// 		}
// 	},
//
// 	_resetCallback: function(e) {
// 		this._reset(e.hard);
// 	},
//
// 	_reset: function(clearOldContainer) {
// 		this._initContainer();
// 	},
//
// 	_update: function(e) {
// 		if (!this._google) return;
// 		this._resize();
//
// 		var center = this._map.getCenter();
// 		var _center = new google.maps.LatLng(center.lat, center.lng);
//
// 		this._google.setCenter(_center);
// 		this._google.setZoom(Math.round(this._map.getZoom()));
//
// 		this._checkZoomLevels();
// 	},
//
// 	_resize: function() {
// 		var size = this._map.getSize();
// 		if (this._container.style.width === size.x &&
// 		    this._container.style.height === size.y)
// 			return;
// 		this.setElementSize(this._container, size);
// 		this.onReposition();
// 	},
//
//
// 	_handleZoomAnim: function (e) {
// 		var center = e.center;
// 		var _center = new google.maps.LatLng(center.lat, center.lng);
//
// 		this._google.setCenter(_center);
// 		this._google.setZoom(Math.round(e.zoom));
// 	},
//
//
// 	onReposition: function() {
// 		if (!this._google) return;
// 		google.maps.event.trigger(this._google, 'resize');
// 	}
// });
//
// L.Google.asyncWait = [];
// L.Google.asyncInitialize = function() {
// 	var i;
// 	for (i = 0; i < L.Google.asyncWait.length; i++) {
// 		var o = L.Google.asyncWait[i];
// 		o._ready = true;
// 		if (o._container) {
// 			o._initMapObject();
// 			o._update();
// 		}
// 	}
// 	L.Google.asyncWait = [];
// };