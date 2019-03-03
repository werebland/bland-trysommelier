import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head'

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
      email: "",
      accessSuccess: false,
    }
  }

  handleAccess(e) {
    e.preventDefault()
    const { email } = this.state
    console.log(email);
  }

  render() {
    return (
      <PageWrapper>
        <Head>
          <title>Get access | Somm | </title>
        </Head>
        <Navbar />
        <PageTitle>
          Get access
        </PageTitle>
        <AccessForm
          handleAccess={(e) => this.handleAccess(e)}
          email={this.state.email}
          handleEmail={(email) => this.setState({ email })}
          accessSuccess={this.state.accessSuccess}/>
      </PageWrapper>
    );
  }

}

export default GetAccess;
