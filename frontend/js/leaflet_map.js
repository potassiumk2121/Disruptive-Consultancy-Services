function initializeMaps() {
  // Select all elements that have an id starting with 'map'
  const mapElements = document.querySelectorAll('[id^="Project_locations"]');
  
  // Loop through each map element and initialize the map
  mapElements.forEach((mapElement) => {
    if (mapElement._leaflet_id) {
      // If the map is already initialized, skip this element
      return;
    }
    const nameAttribute = mapElement.getAttribute('aria-valuetext');
    
    // Initialize the map for each element
    const map = L.map(mapElement, { zoomControl: false, scrollWheelZoom: true }).setView([15, 48], 6); // Center coordinates and zoom level
    
    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: 5,
      maxZoom: 8,
    }).addTo(map);
    
    // Fetch the GeoJSON data from the external file
    fetch(`/map_boundaries/${nameAttribute}.geojson`)
      .then(response => response.json())
      .then(geojsonData => {
        // Add GeoJSON layer to the map
        const geoJsonLayer = L.geoJSON(geojsonData, {
          style: function (feature) {
            return {
              color: 'green',
              weight: 2,
              opacity: 0.7,
              fillOpacity: 0.5,
            };
          },
          onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.name) {
              layer.bindPopup(feature.properties.name);
            }
          },
        }).addTo(map);
        
        // Automatically adjust the map to fit the bounds of the GeoJSON layer
        map.fitBounds(geoJsonLayer.getBounds());
      })
      .catch(error => {
        console.error('Error loading GeoJSON data:', error);
      });
  });
}

// Listen for the Astro:after-render event
document.addEventListener('DOMContentLoaded', initializeMaps);
document.addEventListener('astro:after-swap', initializeMaps);
document.addEventListener('astro:before-swap', initializeMaps);
document.addEventListener('astro:after-render', initializeMaps);
document.addEventListener('astro:before-render', initializeMaps);
document.addEventListener('astro:page-load', initializeMaps);