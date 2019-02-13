import React, { Component } from 'react';
import Head from 'next/head'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import Navbar from '../components/Navbar'

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
`;

const StyledButton = styled(Button)`
  width: 100% !important;
  height: 56px !important;
  color: #fff !important;
  font-family: 'Source Sans Pro', sans-serif !important;
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  background: #1f1f1f !important;
  border-radius: 8px !important;
  text-transform: none !important;
  margin-bottom: 8px !important;
  box-shadow: none !important;
`;

const Hero = styled.section`
  width: 100%;
  padding: 80px 16px 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 960px) {
    padding: 80px 120px 16px;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f1f1f;
  margin: 0 0 24px;
  text-align: center;

  & span {
    text-transform: uppercase;
    background: #f94343;
    color: #fff;
    font-size: 4rem;
    padding: 0 8px;
    box-sizing: border-box;
    display: block;
  }
`;

const HeroCopy = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
  font-size: 1.75rem;
  color: #1f1f1f;
  padding: 0;
  margin: 0 0 24px;
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
    this.state = {};
    this.inputRef = React.createRef()
  }

  handleCapture(e) {
    e.preventDefault()
    const email = this.inputRef.current.value
    console.log(email);
  }

  render() {
    return (
      <Hero>
        <Head>
          <title>Sommelier | Your menu's personal assistant</title>
        </Head>
        <Navbar />
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <HeroTitle>
              Your restaurant deserves
              <br/>
              <span>a better menu</span>
            </HeroTitle>
            <HeroCopy>
              Supercharge your business with Sommelier, a personal assistant for your menu with powerful features and valuable insights.
            </HeroCopy>
            <StyledPaper>
              <form onSubmit={(e) => this.handleCapture(e)}>
                <StyledTextField
                  variant="outlined"
                  label="Business email"
                  placeholder="tkeller@thefrenchlaundry.com"
                  type="email"
                  inputRef={this.inputRef}
                  required/>
                <StyledButton variant="contained" size="large" type="submit">Get started now</StyledButton>
              </form>
              <HeroSpan>
                Free forever · Cancel whenever · No credit card required
              </HeroSpan>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Demo />
          </Grid>
        </Grid>
      </Hero>
    );
  }

}

export default Index;
