function interactionsWrapper() {
  const popup = new mapboxgl.Popup();

  App.map.on('mousemove', e => {
    const features = this.map.queryRenderedFeatures(e.point, {
      layers: ['hospitals', 'libraries'],
    });
    if (!features.length) {
      popup.remove();
      return;
    }
    const feature = features[0];

    popup
      .setLngLat(feature.geometry.coordinates)
      .setHTML(feature.properties.Name)
      .addTo(map);

    App.map.getCanvas().style.cursor = features.length ? 'pointer' : '';
  });
  App.popup = popup;
}
interactionsWrapper();
