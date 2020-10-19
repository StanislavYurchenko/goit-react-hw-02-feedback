import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 200px;
  padding: 15px;
  background-color: #f7f8ff;
`;

function Layout({ children }) {
  return (
    <Container>{children}</Container>        
  );
}

export default Layout;