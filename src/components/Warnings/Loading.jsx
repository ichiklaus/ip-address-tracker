import React from 'react';

import infoStyles from './Styles';

function Loading() {
  return (
    <div id="info-container" className={infoStyles['info-container']}>
      <div id="info-wrapper" className={infoStyles['info-wrapper']}>
        <div id="test" className={infoStyles['info-list-wrapper']}>
          <p className={infoStyles.infoValid}>Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
