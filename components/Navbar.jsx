import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

const NavbarContainer = styled.div`
  width: calc(100% - 20px);
  position: fixed;
  top: 0px;
  left: 10px;
  height: 90px;
  background: #f94343;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  box-sizing: border-box;
  z-index: 8;

  @media only screen and (min-width: 960px) {
    padding: 16px 120px;
  }
`;

const NavbarBrand = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: #fff;
  background: #f94343;
  margin: 0;
  cursor: pointer;
  position: relative;
`;

const NavbarLogo = styled.div`
  height: 32px;
  width: 120px;
  background-image: url('/static/Somm-Logo.png');
  background-size: cover;
  background-position: center;
  display: flex;
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
  border-radius: 8px;
  background: #1f1f1f;
  color: #fff;
  cursor: pointer;
  position: relative;
  padding: 8px 16px;
`;

const Navbar = ({}) => (
  <NavbarContainer>
    <Link href="/">
      <NavbarBrand>
        <NavbarLogo />
      </NavbarBrand>
    </Link>
    <NavbarItems>
      <NavbarItem>
        <ScrollLink to="features" smooth={true} duration={500}>
          Features
        </ScrollLink>
      </NavbarItem>
      <NavbarItem>
        <ScrollLink to="pricing" smooth={true} duration={500} offset={-96}>
          Pricing
        </ScrollLink>
      </NavbarItem>
      <NavbarItem>
        <Link href="/get-access">
          <NavbarButton>
            Get access
          </NavbarButton>
        </Link>
      </NavbarItem>
    </NavbarItems>
  </NavbarContainer>
);

export default Navbar;
