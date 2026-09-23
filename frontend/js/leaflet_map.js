const PLACE_STYLE = {
  color: '#c9a24d',
  weight: 2,
  opacity: 1,
  fillColor: '#b11226',
  fillOpacity: 0.9,
};

const INDIA_PLACES = ['Shimla', 'Delhi', 'Mizoram'];

function ensureMapStyles() {
  if (document.getElementById('dcs-map-styles')) return;
  const style = document.createElement('style');
  style.id = 'dcs-map-styles';
  style.textContent = `
    #Project_locations_India {
      display: flex !important;
      flex-direction: column;
    }
    .india-map-stage {
      flex: 1 1 auto;
      min-height: 0;
      width: 100%;
    }
    .india-place-switch {
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 0;
      padding: 0.4rem 0.5rem 0.45rem;
      background: #f7f6f2;
      border-top: 1px solid rgba(201, 162, 77, 0.55);
    }
    .india-place-switch button {
      appearance: none;
      background: none;
      border: 0;
      margin: 0;
      padding: 0 0 0.15rem;
      cursor: pointer;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 0.9rem;
      line-height: 1.3;
      color: #5c564c;
      border-bottom: 1px solid transparent;
    }
    .india-place-switch button[aria-selected="true"] {
      color: #0a1f3d;
      border-bottom-color: #c9a24d;
    }
    .india-place-switch button:hover {
      color: #0a1f3d;
    }
  `;
  document.head.appendChild(style);
}

function mountCountryMap(mapElement, nameAttribute) {
  const map = L.map(mapElement, { zoomControl: false, scrollWheelZoom: true }).setView([15, 48], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5,
    maxZoom: 8,
  }).addTo(map);

  fetch(`/map_boundaries/${nameAttribute}.geojson`)
    .then((response) => response.json())
    .then((geojsonData) => {
      const geoJsonLayer = L.geoJSON(geojsonData, {
        style: function () {
          return PLACE_STYLE;
        },
        onEachFeature: function (feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        },
      }).addTo(map);
      map.fitBounds(geoJsonLayer.getBounds());
    })
    .catch((error) => {
      console.error('Error loading GeoJSON data:', error);
    });
}

function mountIndiaMaps(mapElement) {
  ensureMapStyles();
  mapElement.innerHTML = '';

  const stage = document.createElement('div');
  stage.className = 'india-map-stage';
  const switcher = document.createElement('div');
  switcher.className = 'india-place-switch';
  switcher.setAttribute('role', 'tablist');
  switcher.setAttribute('aria-label', 'Places in India');
  mapElement.append(stage, switcher);

  const map = L.map(stage, { zoomControl: false, scrollWheelZoom: true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 4,
    maxZoom: 12,
  }).addTo(map);

  fetch('/map_boundaries/India.geojson')
    .then((response) => response.json())
    .then((geojsonData) => {
      const byName = new Map(
        (geojsonData.features || []).map((feature) => [feature.properties && feature.properties.name, feature])
      );
      let activeLayer = null;

      const showPlace = (placeName) => {
        const feature = byName.get(placeName);
        if (!feature) return;
        if (activeLayer) map.removeLayer(activeLayer);
        activeLayer = L.geoJSON(feature, { style: () => PLACE_STYLE }).addTo(map);
        const frame = () => {
          map.invalidateSize();
          map.fitBounds(activeLayer.getBounds(), { padding: [16, 16], maxZoom: 11 });
        };
        frame();
        window.setTimeout(frame, 200);
        switcher.querySelectorAll('button').forEach((button) => {
          button.setAttribute('aria-selected', button.dataset.place === placeName ? 'true' : 'false');
        });
      };

      INDIA_PLACES.forEach((placeName) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.place = placeName;
        button.textContent = placeName;
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', 'false');
        button.addEventListener('click', () => showPlace(placeName));
        switcher.append(button);
      });

      showPlace('Shimla');
    })
    .catch((error) => {
      console.error('Error loading GeoJSON data:', error);
    });
}

function initializeMaps() {
  const mapElements = document.querySelectorAll('[id^="Project_locations"]');

  mapElements.forEach((mapElement) => {
    if (mapElement._leaflet_id || mapElement.dataset.mapReady === 'true') return;
    mapElement.dataset.mapReady = 'true';

    const nameAttribute = mapElement.getAttribute('aria-valuetext');
    if (nameAttribute === 'India') {
      mountIndiaMaps(mapElement);
      return;
    }
    mountCountryMap(mapElement, nameAttribute);
  });
}

document.addEventListener('DOMContentLoaded', initializeMaps);
document.addEventListener('astro:after-swap', initializeMaps);
document.addEventListener('astro:before-swap', initializeMaps);
document.addEventListener('astro:after-render', initializeMaps);
document.addEventListener('astro:before-render', initializeMaps);
document.addEventListener('astro:page-load', initializeMaps);
