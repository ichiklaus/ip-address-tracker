import React, { useState, useCallback } from 'react';
import useSWRImmutable from 'swr/immutable';
import axios from 'axios';

import {
  SearchIP, Info, StreetMap, Error, Loading,
} from '../components';

function Main() {
  const IPIFY_API_KEY = process.env.REACT_APP_GEO_IPIFY_API_KEY;
  const [domain, setDomain] = useState('');

  /*
   * Sets the state into [domain] for the props in order to
   * search for the IP address to display the data in the Info
   * Component
   */
  const getIpAddress = useCallback((ipAddress) => {
    setDomain(ipAddress);
  });

  /*
   * useSWR Hook usage to fetch data from the IPIFY API
   */
  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const API_URL = `https://geo.ipify.org/api/v1?apiKey=${IPIFY_API_KEY}&ipAddress=`;
  const { data, error } = useSWRImmutable(`${API_URL}${domain}`, fetcher);

  if (error) {
    return (
      <div>
        <SearchIP getIpAddress={getIpAddress} />
        <Error />
      </div>
    );
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <SearchIP getIpAddress={getIpAddress} />
      <Info data={data} />
      <StreetMap coordinates={data.location} />
    </div>
  );
}

export default Main;
