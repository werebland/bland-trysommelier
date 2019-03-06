import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import axios from 'axios'

import AccessForm from '../components/AccessForm'
import Navbar from '../components/Navbar'

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

const PageTitle = styled.h1`
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

class GetAccess extends Component {
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
      <PageWrapper>
        <Head>
          <title>Get access | Somm | Your menu's personal assistant</title>
        </Head>
        <Navbar />
        <PageTitle>
          Get access
        </PageTitle>
        <AccessForm
          handleAccess={(e) => this.handleAccess(e)}
          email={this.state.email}
          handleEmail={(email) => this.setState({ email })}
          name={this.state.name}
          handleName={(name) => this.setState({ name })}
          accessStatus={this.state.accessStatus}
          handleClear={() => this.setState({ accessStatus: "", name: "", email: "" })}/>
      </PageWrapper>
    );
  }

}

export default GetAccess;
