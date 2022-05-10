import React, { useState } from 'react';
import PropTypes from 'prop-types';

import iconArrow from './icon-arrow.svg';

import searchStyles from './Styles';

function SearchIP({ getIpAddress }) {
  const [ipAddress, setIpAddress] = useState('');
  function onSubmit(event) {
    event.preventDefault();
    getIpAddress(ipAddress);
  }

  return (
    <div className={searchStyles['form-container']}>
      <form onSubmit={onSubmit} className={searchStyles.form}>
        <input
          type="text"
          autoComplete="off"
          list="autocompleteOff"
          name="search-ip"
          id="search-ip"
          placeholder="Search for any IP address or domain"
          className={searchStyles.input}
          value={ipAddress}
          onChange={(event) => {
            setIpAddress(event.target.value);
          }}
        />
        <button type="submit" className={searchStyles.forButton}>
          <span>
            <img src={iconArrow} alt="icon-arrow" />
          </span>
        </button>
      </form>
    </div>
  );
}

SearchIP.propTypes = { getIpAddress: PropTypes.func.isRequired };

export default SearchIP;
