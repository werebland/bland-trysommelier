import React, { Component } from 'react';
import Head from 'next/head'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NoSsr from '@material-ui/core/NoSsr';
import styled from 'styled-components';
import _ from 'lodash'
import axios from 'axios';
import { hotjar } from 'react-hotjar';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import voucher_codes from 'voucher-code-generator'
import firebase from 'firebase/app'
import base from '../config'

import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import AccessForm from '../components/AccessForm'
import SommWidget from '../components/SommWidget'
import Splash from '../components/Splash'

const IndexWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const StyledPaper = styled(Paper)`
  border-radius: 8px !important;
  padding: 16px !important;
  box-sizing: border-box !important;
  background: #FFFFFF !important;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32) !important;
`;

const StyledTextField = styled(TextField)`
  width: 100% !important;
  margin-bottom: 16px !important;
  border-radius: 8px !important;
  font-family: 'Source Sans Pro', sans-serif !important;

  & fieldset {
    border-radius: 0 !important;
    border: 4px solid #1f1f1f !important;
  }

  & input {
    border-radius: 0 !important;
    font-family: 'Source Sans Pro', sans-serif !important;
  }
`;

const StyledButton = styled(Button)`
  width: 100% !important;
  height: 56px !important;
  color: #fff !important;
  font-family: 'Source Sans Pro', sans-serif !important;
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  background: #1f1f1f !important;
  border-radius: 0px !important;
  text-transform: none !important;
  margin-bottom: 8px !important;
  box-shadow: none !important;
  position: relative !important;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 56px;
    width: 100%;
    background: #f94343;
    z-index: -1;
    top: 4px;
    left: 4px;
  }
`;

const Hero = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 96px 16px 16px;
  box-sizing: border-box;
  background: #f94343;
  position: relative;

  @media only screen and (min-width: 960px) {
    padding: 96px 120px 16px;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 24px;
  text-align: center;
  max-width: 528px;
  box-sizing: border-box;

  & span {
    margin-top: 8px;
    text-transform: uppercase;
    background: #fff;
    color: #f94343;
    font-size: 3.25rem;
    padding: 16px 8px;
    box-sizing: border-box;
    display: block;
    max-width: 528px;
    box-sizing: border-box;
  }
`;

const HeroCopy = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  color: #fff;
  padding: 0;
  margin: 0 0 24px;
  max-width: 528px;
`;

const HeroSpan = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #9f9f9f;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  background-image: -webkit-linear-gradient(117deg, #fff 45%, #f94343 35%);
  min-height: 400px;
`;

const Demo = styled.div`
  width: 100%;
  max-width: 360px;
  height: 600px;
  display: block;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32) !important;
  border-radius: 8px;
  background-image: url('/static/demo.png');
  background-size: cover;
  background-position: center;
`;

const WidgetCallout = styled.div`
  position: fixed;
  bottom: 8px;
  right: 16px;
  z-index: 7;
  height: 64px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32) !important;
  padding: 16px 72px 16px 8px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #1f1f1f;
  font-size: 1rem;

`;

class Index extends Component {

  render() {
    return (
      <IndexWrapper>
        <Splash query={{url: ''}} />
      </IndexWrapper>

    );
  }

}

export default Index;
