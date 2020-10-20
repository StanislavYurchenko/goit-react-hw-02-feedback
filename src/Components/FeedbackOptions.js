import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FeedbackButton from './FeedbackButton.js';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function FeedbackOptions({ options, onLeaveFeedback }) {

  const [ good, neutral, bad ] = options;

  return (
    <Container>
      <FeedbackButton name={ good } callback={ onLeaveFeedback } />
      <FeedbackButton name={ neutral } callback={onLeaveFeedback} />
      <FeedbackButton name={ bad } callback={ onLeaveFeedback } />
    </Container>
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