import React, { useState, useCallback } from 'react';

import { SearchIP, Info, StreetMap } from '../components';

function Main() {
  const [domain, setDomain] = useState('');
  const [coordinates, setCoordinates] = useState({});

  /*
   * Sets the state into [domain] for the props in order to
   * search for the IP address to display the data in the Info
   * Component
   */
  const getIpAddress = useCallback((ipAddress) => {
    setDomain(ipAddress);
  });

  /* Sets the state into [coordinates] for the props in order to
   * write the latitude and longitude from location: {lat, lng}
   * in the StreetMap Component using the Leaflet library
   */
  const getLocation = useCallback((location) => {
    setCoordinates(location);
  });

  console.log(coordinates);

  return (
    <div>
      <SearchIP getIpAddress={getIpAddress} />
      <Info domain={domain} setLocation={getLocation} />
      <StreetMap coordinates={coordinates} />
    </div>
  );
}

export default Main;
