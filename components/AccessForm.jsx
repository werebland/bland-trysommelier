import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import posed, {PoseGroup} from 'react-pose'

const StyledTextField = styled(TextField)`
  width: 100% !important;
  margin-bottom: 16px !important;
  border-radius: 8px !important;
  font-family: 'Source Sans Pro', sans-serif !important;

  & fieldset {
    border: 2px solid #1f1f1f !important;
    border-radius: 8px !important;
  }

  & input {
    font-family: 'Source Sans Pro', sans-serif !important;
  }
`;

const StyledPaper = styled(Paper)`
  max-width: 528px;
  width: 100%;
  border-radius: 8px !important;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32) !important;
`;

const StyledButton = styled(Button)`
  width: 100% !important;
  height: 56px !important;
  color: #fff !important;
  font-family: 'Source Sans Pro', sans-serif !important;
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  background: #1f1f1f !important;
  border-radius: 8px !important;
  text-transform: none !important;
  margin-bottom: 8px !important;
  box-shadow: none !important;
  position: relative !important;
`;

const AccessFormContainer = styled.form`
  box-sizing: border-box;
  padding: 16px;
`;

const PosedContainer = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  }
})

const AccessForm = ({handleAccess, email, handleEmail, name, handleName, accessStatus, handleClear}) => (
  <StyledPaper elevation={2}>
    <AccessFormContainer onSubmit={(e) => handleAccess(e)}>
      <PoseGroup>
        {accessStatus
          ?
          <PosedContainer key="0">
            {accessStatus === "success"
              ?
              <div>
                You're on our list!
              </div>
              :
              <div>
                Whoops! Something went wrong. Here's what we know:
                <span>{accessStatus}</span>
                <StyledButton variant="contained" onClick={() => handleClear()}>
                  Try again
                </StyledButton>
              </div>
            }
          </PosedContainer>
          :
          <PosedContainer key="1">
            <StyledTextField
              type="name"
              name="name"
              onChange={(e) => handleName(e.target.value)}
              value={name}
              required
              variant="outlined"
              label="Name"
              InputLabelProps={{className: 'textfield__label'}}
              placeholder="Thomas Keller"
            />
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
              Get early access
            </StyledButton>
          </PosedContainer>
        }
      </PoseGroup>
    </AccessFormContainer>
  </StyledPaper>

);

export default AccessForm;
