import React, { Component } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { ProgressBar, Step } from "react-step-progress-bar";
import _ from 'lodash'
import firebase from 'firebase'
import 'firebase/storage'
import base from '../config'
import Head from 'next/head'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import MenuAdder from '../components/MenuAdder'
import Navbar from '../components/Navbar'

const storage = firebase.storage()
const storageRef = storage.ref()

const PageWrapper = styled.div`
  padding: 156px 24px 24px;
  box-sizing: border-box;
  border: 10px solid #1f1f1f;
  min-height: 100vh;

  @media only screen and (min-width: 960px) {
    padding: 156px 16px 16px;
  }
`;

const StyledTextField = styled(TextField)`
  width: 100% !important;
  max-width: 360px !important;
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
  height: 56px !important;
  color: #fff !important;
  font-family: 'Source Sans Pro', sans-serif !important;
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  background: ${props => props.disabled ? '#dfdfdf' : '#1f1f1f'}!important;
  border-radius: 0px !important;
  text-transform: none !important;
  margin-bottom: 8px !important;
  box-shadow: none !important;
  position: relative !important;
  border: 0 !important;
  transition: 0.2s ease-out all;
  padding: 0 24px !important;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 56px;
    width: 100%;
    background: ${props => props.disabled ? '#1f1f1f' : '#f94343'};
    z-index: -1;
    top: 4px;
    left: 4px;
  }
`;

const PosedPageTitle = posed.h1({
  closed: {
    flex: 1,
    fontSize: '20px',
  },
  open: {
    flex: 5,
    fontSize: '40px',
  },
})

const PageTitle = styled((props) => <PosedPageTitle {...props} />)`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #1f1f1f;
  position: relative;
  margin: 0 auto 16px;
  display: inline-flex;

  &:after {
    content: "";
    width: 100%;
    height: 8px;
    background: #f94343;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 4px;
    z-index: -1;
  }
`;

const GetStartedFormProgress = styled.div`

`;

const InitiateForm = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const InitiateFormButtons = styled.div`
  width: 100%;
  max-width: 720px;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  flex-direction: ${props => props.currentStep <= 1 ? 'row-reverse' : 'row'};
`;

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      menus: []
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        console.log(uid);
      } else {
        // User is signed out.
        // ...
        console.log('Signed out');
        this.setState({
          currentStep: 0
        })
      }
      // ...
    }.bind(this)).bind(this);
  }

  handleDrop(accepted, rejected) {
    console.log(accepted);
    let { menus } = this.state
    _.forEach(accepted, function(file) {
      let menu = {
        name: file.name,
        file,
        progress: 0,
      }
      menus.push(menu)
    })
    console.log(menus);
    this.setState({
      menus: menus
    })
  }

  handleUpload() {
    const { menus, uid } = this.state
    _.forEach(menus, function(menu) {
      const metaData = {
        type: menu.file.type
      }
      const menuRef = storageRef.child('menus/' + uid + '/' + menu.name)
    })
  }

  handleRemove(i) {
    let { menus } = this.state
    menus.splice(i, 1)
    console.log(menus);
    this.setState({
      menus
    })
  }

  handleName(value, i) {
    const { menus } = this.state
    menus[i].name = value
    this.setState({
      menus
    })
  }

  render() {
    return (
      <PageWrapper className="getStarted">
        <Head>
          <title>Initiate | Somm | Your menu's personal assistant</title>
        </Head>
        <Navbar />
        <InitiateForm>
          <PoseGroup preEnterPose='preEnter'>
            {this.state.currentStep == "0" &&
              <PageTitle key="0">
                Get started
              </PageTitle>
            }
            {this.state.currentStep == "1" &&
              <PageTitle key="1">
                Add your menu
              </PageTitle>
            }
            {this.state.currentStep == "2" &&
              <PageTitle key="2">
                Choose your plan
              </PageTitle>
            }
          </PoseGroup>
          {this.state.currentStep === 0 &&
            <StyledTextField variant="outlined" label="Business email" type="email" required autoFocus/>
          }
          {this.state.currentStep === 1 &&
            <MenuAdder
              files={this.state.menus}
              handleDrop={(accepted, rejected) => this.handleDrop(accepted, rejected)}
              handleRemove={(i) => this.handleRemove(i)}
              handleName={(value, i) => this.handleName(value, i)}/>
          }
          <InitiateFormButtons currentStep={this.state.currentStep}>
            {this.state.currentStep > 1 &&
              <StyledButton
                variant="contained"
                size="medium"
                onClick={() => this.setState({ currentStep: this.state.currentStep -= 1})}>
                Back
              </StyledButton>
            }
            <StyledButton
              variant="contained"
              size="medium"
              disabled={this.state.currentStep === 1 && this.state.menus.length === 0}
              onClick={() => this.setState({ currentStep: this.state.currentStep += 1})}>
              Next
            </StyledButton>
          </InitiateFormButtons>
        </InitiateForm>
      </PageWrapper>
    );
  }

}

export default GetStarted;
