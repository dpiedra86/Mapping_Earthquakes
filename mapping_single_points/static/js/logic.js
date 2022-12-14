// Add console.log to check to see if ouyr code is working 
console.log('working');

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker/circle to the map for Los Angeles, California.
let marker = L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffe0',
    fillOpacity: 0.5,
    radius: 100
 }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_key
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);