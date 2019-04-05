import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TwitterPicker } from 'react-color';
import Grid from '@material-ui/core/Grid';

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

const StyledTextField = styled(TextField)`
  width: 100% !important;
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

const WidgetCustomizerContainer = styled.div`

`;

const WidgetToggleContainer = styled.div`
  width: 100%;
  height: 80px;
  border: 2px solid #dcdcdc;
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  margin-bottom: 16px;
`;

const WidgetToggle = styled.div`
  width: 48px;
  height: 48px;
  background: ${props => props.background};
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
  border-radius: 8px;
  position: absolute;
  bottom: 16px;
  ${props => props.position}: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    fill: ${props => props.iconColor};
    width: 32px;
    height: 32px;
  }
`;

const StyledWidgetToggleIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  scale: 1;
  opacity: 1;
`;

const WidgetToggleIconEmoji = styled.span`
  font-size: 1.75rem;
  line-height: 1.5rem;
  padding-top: 4px;
`;

const StyledTwitterPicker = styled(TwitterPicker)`
  box-shadow: none !important;
  border-radius: 8px !important;
  border: 2px solid #1f1f1f !important;
  position: relative !important;
  box-sizing: border-box;

  & div:nth-of-type(3) {
    padding: 15px 8px 0 12px !important;
  }

  ${props => props.disabled &&
    `&:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #9f9f9f;
      opacity: 0.5;
      cursor: not-allowed;
      z-index: 88;
    }`
  };
`;

const ColorPickerLabel = styled.span`
  font-size: .75rem;
  font-weight: 400;
  color: #9f9f9f;
  font-family: 'Source Sans Pro', sans-serif;
  position: absolute;
  top: -8px;
  left: 10px;
  padding: 0 4px;
  z-index: 8;
  background: #fff;
`;

const WidgetCustomizer = ({ iconColor, handleIconColorChange, backgroundColor, handleBackgroundColorChange, position, handlePositionChange, icon, handleIconChange }) => (
  <WidgetCustomizerContainer>
    <WidgetToggleContainer>
      <WidgetToggle background={backgroundColor} iconColor={iconColor} position={position}>
          {icon === "rounded" &&
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"/>
              <path d="M8.1 13.34l2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L4.4 19.17c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 14.41l6.18 6.18c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 13l1.47-1.47z"/>
            </svg>
          }
          {icon === "sharp" &&
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"/>
              <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
            </svg>
          }
          {icon === "emoji" &&
            <WidgetToggleIconEmoji>🍽️</WidgetToggleIconEmoji>
          }
      </WidgetToggle>
    </WidgetToggleContainer>
    <Grid container spacing={16}>
      <Grid item sm={12} md={12} lg={6} xl={6}>
        <StyledFormControl variant="outlined">
          <StyledInputLabel
            htmlFor="icon-select"
          >
            Icon
          </StyledInputLabel>
          <Select
            value={icon}
            onChange={handleIconChange}
            input={
              <StyledOutlinedInput
                labelWidth={30}
                name="icon"
                id="icon-select"
                classes={{ root: 'label', focused: 'focused' }}
              />
            }
          >
            <MenuItem value={'rounded'}>Rounded</MenuItem>
            <MenuItem value={'sharp'}>Sharp</MenuItem>
            <MenuItem value={'emoji'}>Emoji</MenuItem>
          </Select>
        </StyledFormControl>
      </Grid>
      <Grid item sm={12} md={12} lg={6} xl={6}>
        <StyledFormControl variant="outlined">
          <StyledInputLabel
            htmlFor="icon-select"
          >
            Position
          </StyledInputLabel>
          <Select
            value={position}
            onChange={handlePositionChange}
            input={
              <StyledOutlinedInput
                labelWidth={58}
                name="icon"
                id="icon-select"
                classes={{ root: 'label', focused: 'focused' }}
              />
            }
          >
            <MenuItem value={'left'}>Left</MenuItem>
            <MenuItem value={'right'}>Right</MenuItem>
          </Select>
        </StyledFormControl>
      </Grid>
      <Grid item sm={12} md={12} lg={6} xl={6}>
        <StyledFormControl>
          <ColorPickerLabel>
            Icon color
          </ColorPickerLabel>
          <StyledTwitterPicker id="icon-color-picker" color={iconColor} onChange={(color, event) => handleIconColorChange(color.hex)} triangle="hide" disabled={icon === "emoji"}/>
        </StyledFormControl>
      </Grid>
      <Grid item sm={12} md={12} lg={6} xl={6}>
        <StyledFormControl>
          <ColorPickerLabel>
            Background color
          </ColorPickerLabel>
          <StyledTwitterPicker
            color={backgroundColor}
            onChange={(color, event) => handleBackgroundColorChange(color.hex)}
            triangle="hide"/>
        </StyledFormControl>
      </Grid>
    </Grid>
  </WidgetCustomizerContainer>
);

export default WidgetCustomizer;
