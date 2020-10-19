import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';




function Statistics({message}) {
  return (
    <div>{ message }</div>
  );
}

Statistics.defaultProps = {
message: '',
}

Statistics.propTypes = {
  message: PropTypes.string,
}

export default Statistics;