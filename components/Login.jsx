import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginPaper = styled(Paper)`
  width: 100%;
  max-width: 480px;
  box-sizing: border-box;
  padding: 16px;
`

const Login = ({handleLoginWithEmail}) => (
  <LoginContainer>
    <LoginPaper elevation={2}>
      <TextField variant="outlined" type="email" placeholder="Email" label="Email"/>
    </LoginPaper>
  </LoginContainer>
);

export default Login;
