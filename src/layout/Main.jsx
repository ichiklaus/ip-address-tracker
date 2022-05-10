import React, { useState, useCallback } from 'react';

import { SearchIP, Info, StreetMap } from '../components';

function Main() {
  const [domain, setDomain] = useState('');
  const [coordinates, setCoordinates] = useState({});

  const getIpAddress = useCallback((ipAddress) => {
    setDomain(ipAddress);
  });

  const getLocation = useCallback((location) => {
    setCoordinates(location);
  });

  return (
    <div>
      <SearchIP getIpAddress={getIpAddress} />
      <Info domain={domain} getLocation={getLocation} />
      <StreetMap coordinates={coordinates} />
    </div>
  );
}

export default Main;
