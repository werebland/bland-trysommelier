import React, { Component } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import _ from 'lodash'
import axios from 'axios';
import { hotjar } from 'react-hotjar';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import voucher_codes from 'voucher-code-generator'
import firebase from 'firebase/app'
import base from '../config'
import Fade from 'react-reveal/Fade'

import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';

import AccessForm from './AccessForm'
import SommWidget from './SommWidget'
import Pricing from './Pricing'
import Explainer from './Explainer'

const SplashWrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 80px;

  @media only screen and (min-width: 960px) {
    padding-top: 0;
  }
`;

const SommLogo = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  width: 120px;
  height: 32px;

  & svg {
    fill: #f94343;
  }
`;

const SplashGrid = styled.div`
  display: grid;
  grid-template-columns: 70vw 30vw;

  @media only screen and (max-width: 959px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f1f1f;
  margin: 0 0 24px;
  text-align: center;
  max-width: 528px;
  box-sizing: border-box;

  & span {
    margin-top: 8px;
    text-transform: uppercase;
    background: #f94343;
    color: #fff;
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
  color: #1f1f1f;
  padding: 0;
  margin: 0 0 24px;
  max-width: 528px;
`;

const SplashDemoContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    transform: scale(2.3);
    position: absolute;
    z-index: -1;
  }

  @media only screen and (min-width: 960px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 959px) {
    width: 100vw;
  }
`;

const SplashDemo = styled.div`
  width: 360px;
  height: 600px;
  background-image: url('static/demo.png');
  background-size: cover;
  background-position: center;
  display: flex;
  position: relative;
  z-index: 8;
  border-radius: 8px;
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
`;

const SplashForm = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 960px) {
    padding: 0
  }
`;

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessStatus: null,
      email: "",
      name: "",
      firstName: "",
      referral: "",
    };
  }
  componentDidMount() {
    const hjid = "1229544"
    const hjsv = "6"
    hotjar.initialize(hjid, hjsv);
    ReactPixel.init('263524987898901');
    ReactPixel.pageView();
    ReactGA.initialize('UA-125819564-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
    const referral = this.props.query.r
    if (referral) {

    }
  }

  handleAccess(e) {
    e.preventDefault();
    const { email, name } = this.state
    const names = _.split(name, ' ', 2)
    const firstName = names[0]
    const lastName = names[1]
    const referral = voucher_codes.generate({
        length: 8,
        count: 1,
        prefix: 'R-'
    })[0];

    const data = {
      email,
      firstName,
      lastName
    }

    const formattedData = JSON.stringify(data)
    console.log(formattedData);

    axios({
      method: 'post',
      url: 'https://wt-2c136a182f9df0f639eceee9aa700a3d-0.sandbox.auth0-extend.com/somm-mailchimp',
      data: formattedData,
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Expose-Headers': 'x-auth0-proxy-stats, x-auth0-stats, x-wt-response-source, location',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
      const user = {
        ...data,
        referral,
        status: 'requested'
      }
      base.addToCollection('users', user)
        .then(() => {
          this.setState({
            accessStatus: 'success',
            firstName,
            referral,
          })
        }).catch(err => {
        //handle error
      });
    })
    .catch((error) => {
      console.log(error.response.data);
      this.setState({
        accessStatus: error.response.data.details.title
      })
    });
  }

  render() {
    return (
      <SplashWrapper>
        <Head>
          <title>Somm | Your menu's personal assistant</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
          <link rel="manifest" href="/static/site.webmanifest"/>
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#f94343"/>
          <link rel="shortcut icon" href="/static/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-config" content="/static/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <NoSsr>
          <SommWidget username="lfbakery" iconColor="#f94343" backgroundColor="#fff" position="right" />
        </NoSsr>
        <SommLogo>
          <svg version="1.1" x="0px" y="0px" width="120px" height="32.1px" viewBox="0 0 120 32.1">
          <g>
          	<g>
          		<path className="st0" d="M10.9,5.3C9.4,5.3,8.3,5.8,8.3,7c0,4.1,13,1.8,13,10.7c0,5.1-4.5,7.6-10,7.6c-4.1,0-8.4-1.5-11.4-4l2.5-5.1
          			c2.5,2.2,6.4,3.7,9,3.7c1.9,0,3.1-0.7,3.1-2c0-4.2-13-1.7-13-10.4C1.6,2.9,5.5,0,11.4,0c3.6,0,7.3,1.1,9.9,2.8l-2.4,5.1
          			C16.3,6.4,13,5.3,10.9,5.3z"/>
          		<path className="st0" d="M43.1,15.5c0,5.9-4.2,9.8-10.5,9.8c-6.3,0-10.4-3.9-10.4-9.8c0-5.9,4.1-9.8,10.4-9.8
          			C38.9,5.7,43.1,9.6,43.1,15.5z M28.5,15.5c0,2.9,1.7,4.8,4.1,4.8c2.5,0,4.1-1.9,4.1-4.8c0-2.8-1.7-4.7-4.1-4.7
          			C30.2,10.8,28.5,12.7,28.5,15.5z"/>
          		<path className="st0" d="M76.9,13v12h-6.3V14.8c0-2.2-1.2-3.5-3.1-3.5c-2.2,0-3.6,1.8-3.6,4.3V25h-6.3V14.8c0-2.2-1.2-3.5-3.1-3.5
          			c-2.2,0-3.6,1.8-3.6,4.3V25h-6.3V5.9h6.3v3.1c1.3-2.2,3.5-3.4,6.2-3.4c3.1,0,5.4,1.6,6.4,4.3c1.2-2.8,3.6-4.3,6.7-4.3
          			C74.1,5.7,76.9,8.5,76.9,13z"/>
          		<path className="st0" d="M111,13v12h-6.3V14.8c0-2.2-1.2-3.5-3.1-3.5c-2.2,0-3.6,1.8-3.6,4.3V25h-6.3V14.8c0-2.2-1.2-3.5-3.1-3.5
          			c-2.2,0-3.6,1.8-3.6,4.3V25h-6.3V5.9h6.3v3.1c1.3-2.2,3.5-3.4,6.2-3.4c3.1,0,5.4,1.6,6.4,4.3c1.2-2.8,3.6-4.3,6.7-4.3
          			C108.2,5.7,111,8.5,111,13z"/>
          	</g>
          	<rect x="9" y="27.1" className="st0" width="111" height="4.9"/>
          </g>
          </svg>
        </SommLogo>
        <SplashGrid style={{minHeight: '100vh'}}>
            <SplashForm>
              <Fade bottom ssrFadeout>
                <HeroTitle>
                  Your restaurant deserves
                  <br/>
                  <span>a better menu</span>
                </HeroTitle>
                <HeroCopy>
                  Supercharge your restaurant website with Somm, where guests engage with your menu and you gain valuable insights.
                </HeroCopy>
                <AccessForm
                  handleAccess={(e) => this.handleAccess(e)}
                  email={this.state.email}
                  handleEmail={(email) => this.setState({ email })}
                  name={this.state.name}
                  handleName={(name) => this.setState({ name })}
                  accessStatus={this.state.accessStatus}
                  firstName={this.state.firstName}
                  referral={this.state.referral}
                  handleClear={() => this.setState({ accessStatus: "", name: "", email: "" })}/>
              </Fade>
            </SplashForm>
            <SplashDemoContainer>
              <Fade bottom ssrFadeout delay={300}>
                <SplashDemo key="3"/>
              </Fade>
              <svg
                width="600"
                height="600"
                viewBox="0 0 600 600"
              >
                <g transform="translate(300,300)">
                  <path d="M108.4,-133.2C124.6,-115.5,111.1,-66.4,128.6,-15.5C146.1,35.4,194.7,87.9,191.1,125.4C187.4,162.9,131.5,185.3,76,202.9C20.5,220.5,-34.5,233.4,-76.9,215.9C-119.2,198.5,-148.8,150.7,-148.8,107.1C-148.8,63.4,-119.2,23.8,-115.6,-24.5C-112,-72.8,-134.4,-129.9,-119.5,-147.7C-104.6,-165.6,-52.3,-144.3,-3.1,-140.6C46.1,-136.9,92.1,-150.8,108.4,-133.2Z" fill="#f94343" />
                </g>
              </svg>
            </SplashDemoContainer>
        </SplashGrid>
        <Explainer />
        <Pricing />
      </SplashWrapper>
    );
  }

}

export default Splash;
