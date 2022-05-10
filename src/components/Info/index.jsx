import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import axios from 'axios';

import infoStyles from './Styles';

function Info({ domain, getLocation }) {
  const IPIFY_API_KEY = 'at_ade0GBHX9lQJB7CUX6CHsz9f88lfz';
  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const API_URL = `https://geo.ipify.org/api/v1?apiKey=${IPIFY_API_KEY}&ipAddress=`;
  const { data, error } = useSWR(`${API_URL}${domain}`, fetcher);

  if (error) {
    return (
      <div className={infoStyles.infoContainer}>
        <p className={infoStyles.infoWarning}>
          Please, especify a valid domain.
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={infoStyles.infoContainer}>
        <p className={infoStyles.infoValid}>Loading...</p>
      </div>
    );
  }

  getLocation(data.location);

  // { ip, location: { country, region, timezone, lat, lng }, isp }
  return (
    <div className={infoStyles.infoContainer}>
      <ul className={infoStyles.infoList}>
        <li className={infoStyles.infoLabel}>IP ADDRESS</li>
        <li className={infoStyles.infoText}>{data.ip}</li>
      </ul>
      <ul className={infoStyles.infoList}>
        <li className={infoStyles.infoLabel}>LOCATION</li>
        <li className={`${infoStyles.infoListFlex} ${infoStyles.infoText}`}>
          <span>{data.location.country}</span>
          <span>{data.location.region}</span>
        </li>
      </ul>
      <ul className={infoStyles.infoList}>
        <li className={infoStyles.infoLabel}>TIMEZONE</li>
        <li className={infoStyles.infoText}>{data.location.timezone}</li>
      </ul>
      <ul className={infoStyles.infoList}>
        <li className={infoStyles.infoLabel}>ISP</li>
        <li className={infoStyles.infoText}>{data.isp}</li>
      </ul>
    </div>
  );
}

Info.propTypes = {
  domain: PropTypes.number.isRequired,
  getLocation: PropTypes.func.isRequired,
};

export default Info;
