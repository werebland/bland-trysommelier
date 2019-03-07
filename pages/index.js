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

import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import AccessForm from '../components/AccessForm'
import SommWidget from '../components/SommWidget'

const IndexWrapper = styled.div`
  box-sizing: border-box;
  border: 10px solid #1f1f1f;

  &:before {
    content: "";
    width: 100vw;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #1f1f1f;
    z-index: 999;
  }
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
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  z-index: -1;

  & svg {
    width: 100vw;
  }
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

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessStatus: null,
      email: "",
      name: "",
    };
  }

  handleAccess(e) {
    e.preventDefault();
    const { email, name } = this.state
    const names = _.split(name, ' ', 2)
    const firstName = names[0]
    const lastName = names[1]

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
      this.setState({
        accessStatus: 'success'
      })
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
      <IndexWrapper>
        <Head>
          <title>Somm | Your menu's personal assistant</title>
        </Head>
        <Navbar />
        <NoSsr>
          <SommWidget username="xoh" iconColor="#f94343" backgroundColor="#fff" position="right" />
        </NoSsr>
        <Hero>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <HeroTitle>
                Your restaurant deserves
                <br/>
                <span>a better menu</span>
              </HeroTitle>
              <HeroCopy>
                Supercharge your business with Somm, a personal assistant for your menu with powerful features and valuable insights.
              </HeroCopy>
              <AccessForm
                handleAccess={(e) => this.handleAccess(e)}
                email={this.state.email}
                handleEmail={(email) => this.setState({ email })}
                name={this.state.name}
                handleName={(name) => this.setState({ name })}
                accessStatus={this.state.accessStatus}
                handleClear={() => this.setState({ accessStatus: "", name: "", email: "" })}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Demo />
            </Grid>
          </Grid>
          <HeroBackground>
            <svg viewBox="0 0 1440 770">
                <g id="Page-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(0.000000, -95.000000)" fill="#F94343">
                        <polygon id="Path-2" points="0 769 1440 95 0 95"></polygon>
                    </g>
                </g>
            </svg>
          </HeroBackground>
        </Hero>
        <Features />
        <Pricing />
      </IndexWrapper>

    );
  }

}

export default Index;
