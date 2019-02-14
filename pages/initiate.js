import React, { Component } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { ProgressBar, Step } from "react-step-progress-bar";
import _ from 'lodash'
import firebase from 'firebase'
import base from '../config'

import MenuAdder from '../components/MenuAdder'

const PageWrapper = styled.div`
  padding: 64px 24px 24px;
  box-sizing: border-box;
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
  color: #1f1f1f;
  margin-bottom: 16px;
  text-align: center;
`;

const GetStartedFormProgress = styled.div`

`;

const GetStartedForm = styled.div`

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
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }

  handleDrop(accepted, rejected) {
    console.log(accepted);
    let { menus } = this.state
    _.forEach(accepted, function(file) {
      let menu = {
        name: file.name,
        file
      }
      menus.push(menu)
    })
    console.log(menus);
    this.setState({
      menus: menus
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

  handleName(i, value) {
    const { menus } = this.state
    let menu = menus[i]
    menu.title = value
  }

  render() {
    return (
      <PageWrapper className="getStarted">
        <PoseGroup preEnterPose='preEnter'>
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
        <MenuAdder menus={this.state.menus} handleDrop={(accepted, rejected) => this.handleDrop(accepted, rejected)} handleRemove={(i) => this.handleRemove(i)}/>
      </PageWrapper>
    );
  }

}

export default GetStarted;
