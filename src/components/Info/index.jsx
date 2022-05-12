import React from 'react';
import PropTypes from 'prop-types';
import useSWRImmutable from 'swr/immutable';
import axios from 'axios';

import infoStyles from './Styles';

function Info({ domain, setLocation }) {
  // const IPIFY_API_KEY = 'at_ade0GBHX9lQJB7CUX6CHsz9f88lfz';
  const IPIFY_API_KEY = process.env.REACT_APP_GEO_IPIFY_API_KEY;
  /*
   * useSWR Hook usage to fetch data from the IPIFY API
   */
  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const API_URL = `https://geo.ipify.org/api/v1?apiKey=${IPIFY_API_KEY}&ipAddress=`;
  const { data, error } = useSWRImmutable(`${API_URL}${domain}`, fetcher);

  if (error) {
    return (
      <div id="info-container" className={infoStyles['info-container']}>
        <div id="info-wrapper" className={infoStyles['info-wrapper']}>
          <div id="test" className={infoStyles['info-test']}>
            <p className={infoStyles.infoWarning}>
              Please, especify a valid domain.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div id="info-container" className={infoStyles['info-container']}>
        <div id="info-wrapper" className={infoStyles['info-wrapper']}>
          <div id="test" className={infoStyles['info-test']}>
            <p className={infoStyles.infoValid}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (data) {
    setLocation(data.location); // ENABLE THIS
  }

  /*
   * Setter function
   * Sets the destructured value for location from { data }
   */
  // useEffect(() => {
  // setLocation(data.location); ENABLE THIS
  // }, []);

  /*  Values fetched from the API. These are displayed in the info section
   * { ip, location: { country, region, timezone, lat, lng }, isp }
   */
  return (
    <div id="info-container" className={infoStyles['info-container']}>
      <div id="info-wrapper" className={infoStyles['info-wrapper']}>
        <div id="test" className={infoStyles['info-list-wrapper']}>
          <ul className={infoStyles.infoList}>
            <li className={infoStyles.infoLabel}>IP ADDRESS</li>
            {/* <li className={infoStyles.infoText}>157.100.198.80</li> */}
            <li className={infoStyles.infoText}>{data.ip}</li>
          </ul>
          <ul className={infoStyles.infoList}>
            <li className={infoStyles.infoLabel}>LOCATION</li>
            <li className={`${infoStyles.infoListFlex} ${infoStyles.infoText}`}>
              {/* <span>EC</span>
              <span>Provincia del Guayas</span> */}
              <span>{data.location.country}</span>
              <span>{data.location.region}</span>
            </li>
          </ul>
          <ul className={infoStyles.infoList}>
            <li className={infoStyles.infoLabel}>TIMEZONE</li>
            {/* <li className={infoStyles.infoText}>-05:00</li> */}
            <li className={infoStyles.infoText}>{data.location.timezone}</li>
          </ul>
          <ul className={infoStyles.infoList}>
            <li className={infoStyles.infoLabel}>ISP</li>
            {/* <li className={infoStyles.infoText}>SpaceX Starlink</li> */}
            <li className={infoStyles.infoText}>{data.isp}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Info.propTypes = {
  domain: PropTypes.number.isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default Info;
