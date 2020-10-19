import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';





function FeedbackOptions({ options, onLeaveFeedback }) {

  const [ good, neutral, bad ] = options;

  return (
    <div>
      <button name={ good } onClick={ onLeaveFeedback } type='button'>{ good }</button>
      <button name={ neutral } onClick={ onLeaveFeedback } type='button'>{ neutral }</button>
      <button name={ bad } onClick={ onLeaveFeedback } type='button'>{ bad }</button>
    </div>
  )
}

FeedbackOptions.defaultProps = {
  options: ['good', 'neutral', 'bad'],
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;