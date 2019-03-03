import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const AccessFormContainer = styled.form`

`;

const AccessForm = ({handleAccess, email, handleEmail}) => (
  <AccessFormContainer onSubmit={(e) => handleAccess(e)}>
    <StyledTextField
      type="email"
      name="email"
      onChange={(e) => handleEmail(e.target.value)}
      value={email}
      required
      variant="outlined"
      label="Business email"
      InputLabelProps={{className: 'textfield__label'}}
      placeholder="tkeller@thefrenchlaundry.com"/>
    <StyledButton variant="contained" size="large" type="submit">
      Get access
    </StyledButton>
  </AccessFormContainer>
);

export default AccessForm;
