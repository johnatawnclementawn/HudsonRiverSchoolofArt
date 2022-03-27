/* globals showdown */

const map = L.map('map').setView([41.6934242, -73.9324951], 8);
const countiesLayer = L.layerGroup().addTo(map);

L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  ext: 'png',
}).addTo(map);

/* Load Hudson Valley Counties */
let showHudValCounties = () => {
  countiesLayer.clearLayers();

  const dataFileName = '../data/hudsonRiverValley.geojson';
  fetch(dataFileName)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      c = L.geoJSON(data)
        .bindTooltip(layer => layer.feature.properties.name)
        .addTo(map);
      // console.log(c);
    });
};

