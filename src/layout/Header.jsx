import React from 'react';

import layoutStyles from './Styles';

function Header() {
  return (
    <header className={layoutStyles.header}>
      <h1 className={layoutStyles.headerTitle}>IP Address Tracker</h1>
    </header>
  );
}

export default Header;
