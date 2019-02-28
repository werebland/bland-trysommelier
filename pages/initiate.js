import React, { Component } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import _ from 'lodash'
import firebase from 'firebase'
import 'firebase/storage'
import base from '../config'
import Head from 'next/head'
import NoSSR from 'react-no-ssr';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import MenuAdder from '../components/MenuAdder'
import Navbar from '../components/Navbar'
import RestaurantForm from '../components/RestaurantForm'
import StepperContent from '../components/StepperContent'

const storage = firebase.storage()
const storageRef = storage.ref()

const PageWrapper = styled.div`
  padding: 156px 24px 24px;
  box-sizing: border-box;
  border: 10px solid #1f1f1f;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

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

const StepperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StepperContainer = styled.div`
  width: 100%;
  font-family: 'Source Sans Pro', sans-serif;

  & .initiate__stepperStep span span svg.MuiStepIcon-active-674 {
    color: #f94343 !important;
  }
`;

const StyledStep = styled(Step)`

  & span span svg {
    color: ${props => props.active ? '#1f1f1f' : props.completed ? '#1f1f1f' : '#9f9f9f'} !important;
  }
`;

const InitiateFormContainer = styled.div`
  width: 100%;
  max-width: 720px;
`;

function getSteps() {
  return ['Tell us about your restaurant', 'Add your menus', 'Select a plan'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      menus: [],
      status: "Upload",
      uid: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        console.log(uid);
        this.setState({
          currentStep: 1,
          uid
        })
        this.fetchRestaurant(uid)
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

  fetchRestaurant(uid) {
    base.get('restaurants', {
      context: this,
      withIds: true,
      query: (ref) => ref.where('owner', '==', uid),
    }).then(data => {
      this.setState({
        restaurant: data[0]
      })
    }).catch(err => {
      //handle error
    })
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
    this.setState({
      status: "Uploading..."
    })
    _.forEach(menus, function(menu) {
      const file = menu.file
      const metadata = {
        type: file.type
      }
      const menuRef = storageRef.child('menus/' + uid + '/' + menu.name)
      console.log(menuRef);
      console.log(metadata);
      var uploadTask = menuRef.put(file, metadata)
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
        });
      }).bind(this);
    })
    this.setState({
      status: "Uploaded"
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

  handleRestaurantChange(target) {
    const { value, name } = target
    const { restaurant } = this.state
    restaurant[name] = value
    this.setState({
      restaurant
    })
  }

    isStepOptional = step => false

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  // handleSkip = () => {
  //   const { activeStep } = this.state;
  //   if (!this.isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }
  //
  //   this.setState(state => {
  //     const skipped = new Set(state.skipped.values());
  //     skipped.add(activeStep);
  //     return {
  //       activeStep: state.activeStep + 1,
  //       skipped,
  //     };
  //   });
  // };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <PageWrapper className="getStarted">
        <Head>
          <title>Initiate | Somm | Your menu's personal assistant</title>
        </Head>
        <Navbar />
        <PageTitle>
          Get access
        </PageTitle>
        <InitiateFormContainer>
          {this.state.restaurant &&
            <NoSSR>
              <StepperContainer>
                <Stepper activeStep={activeStep}>
                  {steps.map((label, index) => {
                    const props = {};
                    const labelProps = {};
                    if (this.isStepOptional(index)) {
                      labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (this.isStepSkipped(index)) {
                      props.completed = false;
                    }
                    return (
                      <StyledStep key={label} {...props}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </StyledStep>
                    );
                  })}
                </Stepper>
              </StepperContainer>
              {activeStep === steps.length ? (
                <div>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={this.handleReset}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  <StepperContent
                    activeStep={this.state.activeStep}
                    restaurant={this.state.restaurant}
                    menus={this.state.menus}
                    handleRestaurantChange={(target) => this.handleRestaurantChange(target)}
                    handleDrop={(accepted, rejected) => this.handleDrop(accepted, rejected)}
                    handleRemove={(i) => this.handleRemove(i)}
                    handleName={(value, i) => this.handleName(value, i)}/>
                  <StepperButtons>
                    <StyledButton
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                    >
                      Back
                    </StyledButton>
                    <div>
                      {this.isStepOptional(activeStep) && (
                        <StyledButton
                          variant="contained"
                          color="primary"
                          onClick={this.handleSkip}
                        >
                          Skip
                        </StyledButton>
                      )}
                      <StyledButton
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </StyledButton>
                    </div>
                  </StepperButtons>
                </div>
              )}
            </NoSSR>
          }
        </InitiateFormContainer>
      </PageWrapper>
    );
  }

}

export default GetStarted;
