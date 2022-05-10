import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker from './icon-location.svg';

import mapStyles from './Styles';

function StreetMap({ coordinates }) {
  let [lat, long] = [coordinates.lat, coordinates.lng];

  if (lat === undefined && long === undefined) [lat, long] = [37.40599, -122.078514];

  const leafletMarker = L.icon({
    iconUrl: marker,
    shadowUrl: marker,

    iconSize: [47, 55], // size of the icon
    shadowSize: [47, 55], // size of the shadow
    iconAnchor: [23.5, 55], // point of the icon which will correspond to marker's location
    shadowAnchor: [23.5, 55], // the same for the shadow
    popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  });

  useEffect(() => {
    const map = L.map('map').setView([lat, long], 13);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
      },
    ).addTo(map);

    L.marker([lat, long], { icon: leafletMarker }).addTo(map);
    return () => {
      map.remove();
    };
  }, [lat, long]);
  return (
    <div id="map" className={mapStyles.mapGeneral}>
      {' '}
    </div>
  );
}

StreetMap.propTypes = {
  coordinates: PropTypes.string.isRequired,
};

export default StreetMap;
