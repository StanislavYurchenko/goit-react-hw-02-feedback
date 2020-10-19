import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  flex-basis: 30%;
  border-radius: 5px;
  border: 1px solid rgba(0,0,255,0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0,0,255,0.3);
  transition: all 0.3s linear;
  background-color: #FFF;
  padding: 5px;
  font-size: 16px;
`;

function FeedbackButton({ name, callback}) {
  return (
    <Button name={ name } onClick={ callback } type='button'>{ name }</Button>
  )  
}

FeedbackButton.propTypes = {
  name: PropTypes.string,
  callback: PropTypes.func,
}

export default FeedbackButton;