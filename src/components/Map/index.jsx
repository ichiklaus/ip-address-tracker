import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker from './icon-location.svg';

import mapStyles from './Styles';

/**
 *
 * @param {coordinates} param0
 * @returns { location }
 */
function StreetMap({ coordinates }) {
  /*
   * Reads the lat and lng values from coordinates.lat, coordinates.lng
   */
  let [lat, long] = [37.40599, -122.078514];

  /*
   * Defaults to a static latitude and longitude
   */
  if (coordinates.lat !== undefined && coordinates.lng !== undefined) {
    [lat, long] = [coordinates.lat, coordinates.lng];
  }

  /*
   * Renders the icon.svg into a Leaflet Icon as marker
   */
  const leafletMarker = L.icon({
    iconUrl: marker,
    shadowUrl: marker,

    iconSize: [32, 38], // size of the icon
    shadowSize: [32, 38], // size of the shadow
    iconAnchor: [23.5, 55], // point of the icon which will correspond to marker's location
    shadowAnchor: [23.5, 55], // the same for the shadow
    popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  });

  useEffect(() => {
    const map = L.map('map').setView([lat, long], 13);

    /*
     * Mapbox API fetching to "tile" (paint) the map layer over the canvas
     */
    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_GEO_MAPBOX_API_KEY}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.REACT_APP_GEO_MAPBOX_API_KEY,
      },
    ).addTo(map);

    /*
     * Add the Leaflet icon as marker on top of
     * the map layer according to the latitude and longitude
     */
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
