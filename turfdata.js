const { map } = require('./js/mapbox').map;

map.addSource('nearest-hospital', {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: [],
  },
});

map.on('click', e => {
  // Return any features from the 'libraries' layer whenever the map is clicked
  const libraryFeatures = map.queryRenderedFeatures(e.point, {
    layers: ['libraries'],
  });
  if (!libraryFeatures.length) {
    return;
  }
  const libraryFeature = libraryFeatures[0];

  // Using Turf, find the nearest hospital to library clicked
  const nearestHospital = turf.nearest(libraryFeature, hospitals);

  // If a nearest library is found
  if (nearestHospital !== null) {
    // Update the 'nearest-library' data source to include
    // the nearest library
    map.getSource('nearest-hospital').setData({
      type: 'FeatureCollection',
      features: [nearestHospital],
    });
    // Create a new circle layer from the 'nearest-library' data source
    map.addLayer(
      {
        id: 'nearest-hospital',
        type: 'circle',
        source: 'nearest-hospital',
        paint: {
          'circle-radius': 12,
          'circle-color': '#486DE0',
        },
      },
      'hospitals'
    );
  }
});

module.exports = { libraryFeature, nearestHospital };
