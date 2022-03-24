/* File cretated by: Dania Tomas Iannarone, 2022 */
//initialize function called when the script loads
function initialize(){
    loadMap();
};

//function to create a table with cities and their populations
function loadMap(){
    //create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/
	var OpenTopoMap = L.tileLayer(
		'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', 
		{
			attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
			
		}
	)
	//add this basemap style to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
	var baseLayers = {
		"OpenTopoMap": OpenTopoMap
		//,...
	};
	// create the map
	var mymap = L.map('mapdiv', {
		center: [45.50, -73.58]
		,zoom: 3
		,maxZoom: 18
		,minZoom: 3
		,layers: OpenTopoMap
	});
		
	// parse json object (var geojsonData) and turn into loadable layer
	geojsonLayer = L.geoJSON(geojsonData);
	
	//add geojsonData to map
	geojsonLayer.addTo(mymap);// add json element to map
	
	//declare basemap selector widget
	var lcontrol = L.control.layers(baseLayers);
	//add it to the map
	lcontrol.addTo(mymap);

	//add a scale to mymap
	L.control.scale().addTo(mymap);




};

//call the initialize function when the window has loaded
window.onload = initialize();