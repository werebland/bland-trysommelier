import React, { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import base from '../config'
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'
import axios from 'axios';
import Head from 'next/head'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepIcon from '@material-ui/core/StepIcon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import _ from 'lodash'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


import AccessForm from '../components/AccessForm'
import MenuUploader from '../components/MenuUploader'
import WidgetCustomizer from '../components/WidgetCustomizer'

var storage = firebase.storage();
var storageRef = storage.ref();
var menusRef = storageRef.child('menus')

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

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const StyledOutlinedInput = styled(OutlinedInput)`
  & fieldset {
      border: 2px solid #1f1f1f !important;
      border-radius: 8px !important;
  }

  & div svg {
    right: 4px !important;
  }
`;

const StyledInputLabel = styled(InputLabel)`
  color: ${props => props.focused ? '#1f1f1f' : '#9f9f9f'} !important;
`;

const StyledStep = styled(Step)`
  &.completed span span svg {
    color: #1f1f1f !important;
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
  justify-content: flex-start;
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
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
  box-sizing: border-box;
`;

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      restaurant: {
        username: "",
        name: "",
        address: {
          street: "",
          city: "",
          country: "",
        },
        price: "",
        cuisine: "",
        owner: "",
      },
      menus: [],
      activeStep: 0,
      email: "",
      name: "",
      labelWidth: 0,
      isLoading: true,
      addressTerm: '',
      widget: {
        iconColor: '#1f1f1f',
        backgroundColor: '#fff',
        position: 'right',
        icon: 'emoji'
      }
    }
  }

  componentDidMount() {
    console.log(window.location.search);
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    const { email } = vars
    if (email) {
      base.get('users', {
        context: this,
        withIds: true,
        query: (ref) => ref.where('email', '==', email),
      }).then(data => {
        this.setState({
          user: data[0],
          isLoading: false,
        })
      }).catch(err => {
        console.log(err);
        this.setState({
          user: {},
          isLoading: false,
        })
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
    const { activeStep } = this.state
    if (activeStep === 2) {
      console.log('completed');
      this.handleComplete()
    } else {
      this.setState({
        activeStep: activeStep + 1
      })
    }
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

  handleMenuName(value, i) {
    let { menus } = this.state
    menus[i].name = value
    this.setState({
      menus
    })
  }

  handleRestaurantName = (value) => {
    let { restaurant } = this.state
    restaurant.name = value
    this.setState({
      restaurant
    })
  }

  handleRestaurantCuisine = (value) => {
    let { restaurant } = this.state
    restaurant.cuisine = value
    this.setState({
      restaurant
    })
  }

  handleRestaurantPrice = (event) => {
    const { value } = event.target
    let { restaurant } = this.state
    restaurant.price = value
    this.setState({
      restaurant
    })
  }

  handleRestaurantUsername = (value) => {
    let { restaurant } = this.state
    restaurant.username = value
    this.setState({
      restaurant
    })
  }

  handleChange = address => {
    this.setState({ addressTerm: address });
    console.log(address);
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  handleComplete() {
    // Upload menus, then create restaurant with links to uploaded menus
    this.uploadMenus()
  }

  uploadMenus() {
    const { id } = this.state.user
    const files = this.state.menus
    console.log(files);
    Promise.all(
      // Array of "Promises"
      files.map(item => this.putStorageItem(item, id))
    )
    .then((url) => {
      console.log(`All success`)
      console.log(url);
      this.createRestaurant(url)
    })
    .catch((error) => {
      console.log(`Some failed: `, error.message)
    });
  }

  putStorageItem(item, id) {
    const { file, name } = item
    // the return value will be a Promise
    return storageRef.child('menus/' + id + '/' + file.name).put(file)
    .then((snapshot) => {
      let menu = {
        name,
      }
      console.log('One success:', item)
      console.log(snapshot);
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        menu.menuPath = String(downloadURL)
      })
      console.log(menu);
      return menu
    }).catch((error) => {
      console.log('One failed:', item, error.message)
    });
  }

  createRestaurant(url) {
    const menus = url
    const { restaurant, user, activeStep, widget } = this.state
    const owner = user.id
    console.log(user);
    const data = {
      ...restaurant,
      owner,
      menus,
      widget,
    }
    console.log(data);
    base.addToCollection('restaurants', data)
      .then(() => {
        console.log('success');
      }).catch(err => {
      //handle error
    });
  }

  updateUser(url) {
    const menus = url
    const { id } = this.state.user
    const data = {
      menus
    }
    console.log(menus);
    console.log(data);
    base.updateDoc('users/' + id, data)
    .then(() => {
      console.log('success');
      }).catch(err => {
      console.log(err);
    });
  }

  handleWidgetIconColor(value) {
    let { widget } = this.state
    widget.iconColor = value
    this.setState({
      widget
    })
  }

  handleWidgetBackgroundColor(value) {
    let { widget } = this.state
    widget.backgroundColor = value
    this.setState({
      widget
    })
  }

  handleWidgetPosition(value) {
    let { widget } = this.state
    widget.position = value
    this.setState({
      widget
    })
  }

  render() {
    const { classes } = this.props;
    const steps = ['Tell us about your restaurant', 'Upload your menus', 'Customize your widget']
    const { activeStep, restaurant, menus, user, addressTerm, widget } = this.state;
    const { email, firstName, lastName } = user
    const { restaurantName, location, price, cuisine, address, username } = restaurant

    return (
      <PageWrapper>
        <Head>
          <title>
            Onboard | Somm | Your menu's personal assistant
          </title>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
          <link rel="manifest" href="/static/site.webmanifest"/>
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#f94343"/>
          <link rel="shortcut icon" href="/static/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-config" content="/static/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
        </Head>
        {this.state.isLoading
          ?
          <OnboardContent>
          </OnboardContent>
          :
          <React.Fragment>
            {Object.keys(user).length > 0
              ?
              <OnboardContent>
                <PageTitle>
                  Hop onboard
                </PageTitle>
                <OnboardStepper>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, i) => (
                      <StyledStep key={label} classes={{ root: 'step', completed: 'completed' }}>
                        <StepLabel>{label}</StepLabel>
                      </StyledStep>
                    ))}
                  </Stepper>
                  <PoseGroup activeStep={activeStep} preEnterPose="preEnter">
                    {activeStep === 0 &&
                      <OnboardStepperContent key="0" step={0}>
                        <Grid container spacing={16} style={{ position: 'relative', zIndex: '2', background: '#fff', }}>
                          <Grid item sm={12} md={12} lg={6} xl={6}>
                            <StyledTextField variant="outlined" label="First name" value={firstName} onChange={(e) => this.setState({ email: e.target.value })}/>
                          </Grid>
                          <Grid item sm={12} md={12} lg={6} xl={6}>
                            <StyledTextField variant="outlined" label="Last name" value={lastName} onChange={(e) => this.setState({ email: e.target.value })}/>
                          </Grid>
                          <Grid item sm={12} md={12} lg={12} xl={12}>
                            <StyledTextField variant="outlined" label="Email" value={email} onChange={(e) => this.handleEmail(e.target.value)}/>
                          </Grid>
                          <Grid item sm={12} md={12} lg={6} xl={6}>
                            <StyledTextField variant="outlined" label="Username" value={username} onChange={(e) => this.handleRestaurantUsername(e.target.value)}/>
                          </Grid>
                          <Grid item sm={12} md={12} lg={6} xl={6}>
                            <StyledTextField variant="outlined" label="Restaurant name" value={restaurantName} onChange={(e) => this.handleRestaurantName(e.target.value)}/>
                          </Grid>
                          <Grid item sm={12} md={12} lg={12} xl={12}>
                          <PlacesAutocomplete
                            value={addressTerm}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                              <div>
                                <StyledFormControl>
                                  <StyledTextField
                                    variant="outlined"
                                    label="Location"
                                    id="places-autocomplete"
                                    {...getInputProps({
                                      placeholder: 'Search Places ...',
                                      className: 'location-search-input',
                                    })}/>
                                </StyledFormControl>
                                <div className="autocomplete-dropdown-container">
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                          </Grid>
                          <Grid item sm={12} md={12} lg={6} xl={6}>
                            <StyledTextField variant="outlined" label="Cuisine" value={cuisine} onChange={(e) => this.handleRestaurantCuisine(e.target.value)}/>
                          </Grid>
                          <Grid item sm={12} md={12} lg={6} xl={6}>
                            <StyledFormControl variant="outlined">
                              <StyledInputLabel
                                htmlFor="outlined-age-simple"
                              >
                                Price
                              </StyledInputLabel>
                              <Select
                                value={price}
                                onChange={this.handleRestaurantPrice}
                                input={
                                  <StyledOutlinedInput
                                    labelWidth={38}
                                    name="price"
                                    id="outlined-price-simple"
                                    classes={{ root: 'label', focused: 'focused' }}
                                  />
                                }
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={'$'}>$</MenuItem>
                                <MenuItem value={'$-$$'}>$-$$</MenuItem>
                                <MenuItem value={'$$'}>$$</MenuItem>
                                <MenuItem value={'$$-$$$'}>$$-$$$</MenuItem>
                                <MenuItem value={'$$$'}>$$$</MenuItem>
                                <MenuItem value={'$-$$$'}>$-$$$</MenuItem>
                              </Select>
                            </StyledFormControl>
                          </Grid>
                        </Grid>
                      </OnboardStepperContent>
                    }
                    {activeStep === 1 &&
                      <OnboardStepperContent key="1" step={1} style={{ position: 'relative', zIndex: '3', background: '#fff', }}>
                        <MenuUploader
                          files={this.state.menus}
                          handleDrop={(accepted, rejected) => this.handleDrop(accepted, rejected)}
                          handleRemove={(i) => this.handleRemove(i)}
                          handleMenuName={(value, i) => this.handleMenuName(value, i)}/>
                      </OnboardStepperContent>
                    }
                    {activeStep === 2 &&
                      <OnboardStepperContent key="2" step={2}>
                        <WidgetCustomizer
                          iconColor={widget.iconColor}
                          backgroundColor={widget.backgroundColor}
                          position={widget.position}
                          icon={widget.icon}
                          handleIconColorChange={(value) => this.handleWidgetIconColor(value)}
                          handleBackgroundColorChange={(value) => this.handleWidgetBackgroundColor(value)}
                          handlePositionChange={(value) => this.handleWidgetPosition(value)} />
                      </OnboardStepperContent>
                    }
                  </PoseGroup>
                  <StepperButtons activeStep={activeStep}>
                    {this.state.activeStep > 0 &&
                      <StyledButton onClick={this.handleBack} size="large">
                        Back
                      </StyledButton>
                    }
                    <StyledButton
                      variant="contained"
                      onClick={this.handleNext}
                      size="large">
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
          </React.Fragment>
        }
        <OnboardBackground />
      </PageWrapper>
    );
  }

}

export default Onboard;
