import React from 'react';

import infoStyles from './Styles';

function Error() {
  return (
    <div id="info-container" className={infoStyles['info-container']}>
      <div id="info-wrapper" className={infoStyles['info-wrapper']}>
        <div id="test" className={infoStyles['info-list-wrapper']}>
          <p className={infoStyles.infoWarning}>
            Please, especify a valid IP Address or domain.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
