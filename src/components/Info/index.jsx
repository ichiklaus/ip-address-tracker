import React from 'react';
import PropTypes from 'prop-types';

import infoStyles from './Styles';

function Info({ data }) {
  /*  Values fetched from the API. These are displayed in the info section
   * { ip, location: { country, region, timezone, lat, lng }, isp }
   */
  return (
    <div id="info-container" className={infoStyles['info-container']}>
      <div id="info-wrapper" className={infoStyles['info-wrapper']}>
        <div id="list-wrapper" className={infoStyles['info-list-wrapper']}>
          <ul className={infoStyles.infoUList}>
            <div className={infoStyles.divider}>
              <li className={infoStyles.infoLabel}>IP ADDRESS</li>
              <li className={infoStyles.infoText}>{data.ip}</li>
            </div>
          </ul>
          <ul className={infoStyles.infoUList}>
            <div className={infoStyles.divider}>
              <li className={infoStyles.infoLabel}>LOCATION</li>
              <li
                className={`${infoStyles.infoListFlex} ${infoStyles.infoText}`}
              >
                <span>{data.location.country}</span>
                <span>{data.location.region}</span>
              </li>
            </div>
          </ul>
          <ul className={infoStyles.infoUList}>
            <div className={infoStyles.divider}>
              <li className={infoStyles.infoLabel}>TIMEZONE</li>
              <li className={infoStyles.infoText}>{data.location.timezone}</li>
            </div>
          </ul>
          <ul>
            <div className={infoStyles.divider}>
              <li className={infoStyles.infoLabel}>ISP</li>
              <li className={infoStyles.infoText}>{data.isp}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

Info.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Info;
