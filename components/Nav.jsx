import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: transparent;
  z-index: 88;
`;

const Nav = ({}) => (
  <NavWrapper>
    sommelier
  </NavWrapper>
);

export default Nav;
