import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const NavbarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 960px) {
    padding: 16px 120px;
  }
`;

const NavbarBrand = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: #fff;
  background: #f94343;
  margin: 0;
`;

const NavbarItems = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  padding: 0;
  margin: 0;
`;

const NavbarItem = styled.li`
  display: inline-flex;
  list-style: none;
  margin-right: 16px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const NavbarButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 8px;
  background: #1f1f1f;
  color: #fff;
  cursor: pointer;
  position: relative;
  padding: 8px 16px;
`;

const Navbar = ({}) => (
  <NavbarContainer>
    <NavbarBrand>
      sommelier
    </NavbarBrand>
    <NavbarItems>
      <NavbarItem>
        Features
      </NavbarItem>
      <NavbarItem>
        Pricing
      </NavbarItem>
      <NavbarItem>
        <Link href="/initiate">
          <NavbarButton>
            Get Started
          </NavbarButton>
        </Link>
      </NavbarItem>
    </NavbarItems>
  </NavbarContainer>
);

export default Navbar;
