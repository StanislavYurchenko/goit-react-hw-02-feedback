import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';




function Section({title, children}) {
  return (
    <div>
      <h3>{ title }</h3>
      { children } 
    </div>
  );
}

Section.defaultProps = {
  title: '',
}

Section.propTypes = {
  title: PropTypes.string,
  children:PropTypes.node,
}



export default Section;