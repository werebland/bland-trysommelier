import React, { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth'
import base from '../config'
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'
import axios from 'axios';
import Head from 'next/head'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash'

import AccessForm from '../components/AccessForm'
import MenuUploader from '../components/MenuUploader'

const StyledButton = styled(Button)`
  text-transform: none !important;
  border-radius: 8px !important;
  background: ${props => props.variant === "contained" ? '#54a0ff' : 'transparent'} !important;
  box-shadow: ${props => props.variant === "contained" ? '0 2px 16px -2px rgba(31,31,31,0.32)' : 'none'} !important;
  color: ${props => props.variant === "contained" ? '#fff' : '#1f1f1f'} !important;
`;

const StyledTextField = styled(TextField)`
  width: 100% !important;
  border-radius: 8px !important;
  font-family: 'Source Sans Pro', sans-serif !important;
  box-sizing; border-box !important;

  & fieldset {
    border: 2px solid #1f1f1f !important;
    border-radius: 8px !important;
  }

  & input {
    font-family: 'Source Sans Pro', sans-serif !important;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
`;

const OnboardContent= styled.div`
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 16px;
  background: #fff;
  display: flex;
  flex: .4;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #1f1f1f;
  position: relative;
  margin: 0 auto 16px;
  display: inline-flex;
  z-index: 1;

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

const OnboardBackground = styled.div`
  width: 77%;
  height: 100%;
  min-height: 100vh;
  background: aliceblue;
  background-image: url('https://images.unsplash.com/photo-1550259114-ad7188f0a967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80');
  background-position: center;
  background-size: cover;
  display: flex;
  flex: .6;

`;

const OnboardStepper = styled.div`
  width: 100%;
`;

const PosedOnboardStepperContent = posed.div({
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: ({ activeStep, step }) => activeStep <= step ? 300 : -300,
    opacity: 0,
  }
})

const OnboardStepperContent = styled(props => <PosedOnboardStepperContent {...props}/>)`

`;

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const StepperButtons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  flex-direction: ${props => props.activeStep === 0 ? 'row-reverse' : 'row'};
`;

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      menus: [],
      activeStep: 0,
      email: "",
      name: "",
    }
  }

  componentDidMount() {
    console.log(window.location.search);
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    console.log(vars);
    const { email } = vars
    console.log(email);
    if (email) {
      this.setState({
        restaurant: {
          email
        }
      })
    }
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

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleDrop = (accepted, rejected) => {
    let { menus } = this.state
    _.forEach(accepted, function(file) {
      const menu = {
        name: file.name,
        file
      }
      menus.push(menu)
    })
    this.setState({
      menus
    })
  };

  handleRemove = (i) => {
    const { menus } = this.state
    console.log('removed' + i);
    menus.splice(i, 1)
    this.setState({
      menus
    });
  };

  handleMenuName = (value, i) => {
    let { menus } = this.state
    menus[i].name = value
    this.setState({
      menus
    })
  }

  render() {
    const { classes } = this.props;
    const steps = ['Tell us about your restaurant', 'Upload your menus', 'Customize your widget']
    const { activeStep, restaurant, menus } = this.state;
    const { email, firstName, lastName, name } = restaurant

    return (
      <PageWrapper>
        <Head>
          <title>
            Onboard | Somm
          </title>
        </Head>
        {Object.keys(restaurant).length > 0
          ?
          <OnboardContent>
            <PageTitle>
              Hop onboard
            </PageTitle>
            <OnboardStepper>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <PoseGroup activeStep={activeStep} preEnterPose="preEnter">
                {activeStep === 0 &&
                  <OnboardStepperContent key="0" step={0}>
                    <Grid container spacing={16}>
                      <Grid item sm={12} md={12} lg={6} xl={6}>
                        <StyledTextField variant="outlined" label="First name" value={firstName} onChange={(e) => this.setState({ email: e.target.value })}/>
                      </Grid>
                      <Grid item sm={12} md={12} lg={6} xl={6}>
                        <StyledTextField variant="outlined" label="Last name" value={lastName} onChange={(e) => this.setState({ email: e.target.value })}/>
                      </Grid>
                      <Grid item sm={12} md={12} lg={12} xl={12}>
                        <StyledTextField variant="outlined" label="Email" value={email} onChange={(e) => this.setState({ [restaurant.email]: e.target.value })}/>
                      </Grid>
                      <Grid item sm={12} md={12} lg={12} xl={12}>
                        <StyledTextField variant="outlined" label="Restaurant name" value={name} onChange={(e) => this.setState({ [restaurant.email]: e.target.value })}/>
                      </Grid>
                    </Grid>
                  </OnboardStepperContent>
                }
                {activeStep === 1 &&
                  <OnboardStepperContent key="1" step={1}>
                    <MenuUploader
                      files={this.state.menus}
                      handleDrop={(accepted, rejected) => this.handleDrop(accepted, rejected)}
                      handleRemove={(i) => this.handleRemove(i)}
                      handleMenuName={(value, i) => this.handleMenuName(value, i)}/>
                  </OnboardStepperContent>
                }
                {activeStep === 2 &&
                  <OnboardStepperContent key="2" step={2}>
                    Widget customizer
                  </OnboardStepperContent>
                }
              </PoseGroup>
              <StepperButtons activeStep={activeStep}>
                {this.state.activeStep > 0 &&
                  <StyledButton onClick={this.handleBack}>
                    Back
                  </StyledButton>
                }
                <StyledButton variant="contained" onClick={this.handleNext}>
                  {activeStep === 2
                    ?
                    "Finish"
                    :
                    "Next"
                  }
                </StyledButton>
              </StepperButtons>
            </OnboardStepper>
          </OnboardContent>
          :
          <OnboardContent>
            <PageTitle>
              Whoops!
            </PageTitle>
            It doesn't look like you're part of our early access program yet.
            <AccessForm
              handleAccess={(e) => this.handleAccess(e)}
              email={this.state.email}
              handleEmail={(email) => this.setState({ email })}
              name={this.state.name}
              handleName={(name) => this.setState({ name })}
              accessStatus={this.state.accessStatus}
              handleClear={() => this.setState({ accessStatus: "", name: "", email: "" })}/>
          </OnboardContent>
        }

        <OnboardBackground />
      </PageWrapper>
    );
  }

}

export default Onboard;
