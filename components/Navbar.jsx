import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const NavbarContainer = styled.div`
  width: calc(100% - 20px);
  position: absolute;
  top: 10px;
  left: 10px;
  height: 140px;
  background: #f94343;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  box-sizing: border-box;
  z-index: 888;

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
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;

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
  font-weight: 700;
  border-radius: 0;
  background: #1f1f1f;
  color: #fff;
  cursor: pointer;
  position: relative;
  padding: 8px 16px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 36px;
    width: 100%;
    background: #fff;
    z-index: -1;
    top: 4px;
    left: 4px;
  }
`;

const Navbar = ({}) => (
  <NavbarContainer>
    <NavbarBrand>
      Somm
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
            Get access
          </NavbarButton>
        </Link>
      </NavbarItem>
    </NavbarItems>
  </NavbarContainer>
);

export default Navbar;
