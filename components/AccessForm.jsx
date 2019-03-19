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

const AccessFormStatus = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const AccessFormStatusEmoji = styled.i`
  text-transform: none;
  font-size: 4rem;
  margin: 0;
`;

const AccessFormStatusTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #1f1f1f;
  font-size: 1.5rem;
  margin: 0 0 8px;
`;

const AccessFormStatusSubtitle = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 16px;
  text-align: center;
`;

const AccessFormReferral = styled.div`
  display: inline-flex;
  padding: 2px;
  border: 2px solid #1f1f1f;
  border-radius: 8px;
  height: 54px;
`;

const AccessFormReferralCode = styled.span`
  height: 100%;
  display: inline-flex;
  flex: 1;
  align-items: center;
  padding: 0 16px;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f1f1f;
`;

const AccessFormReferralCopy = styled.div`
  width: 48px;
  height: 100%;
  background: #1f1f1f;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: #fff;
  }
`;

const AccessForm = ({handleAccess, email, handleEmail, name, handleName, accessStatus, firstName, referral, handleClear}) => (
  <StyledPaper elevation={2}>
    <AccessFormContainer onSubmit={(e) => handleAccess(e)}>
      <PoseGroup>
        {accessStatus
          ?
          <PosedContainer key="0">
            {accessStatus === "success"
              ?
              <AccessFormStatus>
                <AccessFormStatusEmoji>👋</AccessFormStatusEmoji>
                <AccessFormStatusTitle>{firstName}, you're on our list!</AccessFormStatusTitle>
                <AccessFormStatusSubtitle>
                  We'll be in touch when you get access.
                  <br/>
                  Share your referral link with friends to move up the list.
                </AccessFormStatusSubtitle>
                <AccessFormReferral>
                  <AccessFormReferralCode>
                    somm.ca/{referral}
                  </AccessFormReferralCode>
                  <AccessFormReferralCopy>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0V0z"/>
                      <path d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>
                    </svg>
                  </AccessFormReferralCopy>
                </AccessFormReferral>
              </AccessFormStatus>
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
