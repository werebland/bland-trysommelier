import React, { Component } from 'react';
import Head from 'next/head'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import firebase from 'firebase/app'
import 'firebase/auth'
import base from '../config'
import Router from 'next/router'

import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import AccessForm from '../components/AccessForm'

const IndexWrapper = styled.div`
  box-sizing: border-box;
  border: 10px solid #1f1f1f;
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
  padding: 156px 16px 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 960px) {
    padding: 156px 120px 16px;
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
    this.state = {
      accessSuccess: false,
    };
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.FIREBASE_API);
  }

  handleCapture(e) {
    e.preventDefault()
    const email = this.inputRef.current.value
    console.log(email);
    const auth = base.initializedApp.auth
    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        console.log(user);
        console.log(uid);
        const data = {
          owner: uid,
          email,
        }
        base.addToCollection('restaurants', data)
          .then(() => {
            console.log('success');
          }).catch(err => {
          //handle error
        });
        Router.push('/initiate')
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }

  handleAccess(e) {
    e.preventDefault()
    const { email } = this.state
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'https://trysomm.werebland.com/initiate',
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
    };
    console.log(email);
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function() {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
    })
    .catch(function(error) {
      console.log(error.code);
      // Some error occurred, you can inspect the code: error.code
    });
  }

  render() {
    return (
      <IndexWrapper>
        <Hero>
          <Head>
            <title>Somm | Your menu's personal assistant</title>
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
                Supercharge your business with Somm, a personal assistant for your menu with powerful features and valuable insights.
              </HeroCopy>
              <AccessForm
                handleAccess={(e) => this.handleAccess(e)}
                email={this.state.email}
                handleEmail={(email) => this.setState({ email })}
                accessSuccess={this.state.accessSuccess}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              <Demo />
            </Grid>
          </Grid>
        </Hero>
        <Pricing />
      </IndexWrapper>

    );
  }

}

export default Index;
