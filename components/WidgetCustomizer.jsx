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
  font-size: 1rem;
  font-weight: 400;
  color: #1f1f1f;
  font-family: 'Source Sans Pro', sans-serif;
  margin-bottom: 8px;
`;

const WidgetCustomizer = ({ iconColor, handleIconColorChange, backgroundColor, handleBackgroundColorChange, position, handlePositionChange, icon, handleIconChange }) => (
  <WidgetCustomizerContainer>
    <WidgetToggleContainer>
      <WidgetToggle background={backgroundColor} position={position}>
          {icon === "rounded" &&
            <svg width="22px" height="20px" viewBox="0 0 22 20" version="1.1">
                <g id="Page-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(-1379.000000, -720.000000)">
                        <g id="Group-10" transform="translate(1054.000000, 90.000000)">
                            <g id="Group-9" transform="translate(312.000000, 616.000000)">
                                <g id="round-restaurant_menu-24px" transform="translate(12.000000, 12.000000)">
                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                    <path d="M7.0394622,13.5010047 L10.2283461,10.3121208 L3.25336682,3.34840963 C2.71249606,2.80753886 1.77724035,2.95402469 1.43919612,3.65264944 C0.639158114,5.33160244 0.93212978,7.39367224 2.31811112,8.79092173 L7.0394622,13.5010047 Z M14.6792618,11.4614711 C16.4032874,12.2615092 18.8259377,11.6981021 20.6175721,9.90646768 C22.769787,7.75425276 23.1867082,4.66678213 21.5302915,3.0103654 C19.8851429,1.36521682 16.7976723,1.77086989 14.6341892,3.92308482 C12.8425548,5.71471924 12.2791478,8.13736955 13.0791858,9.86139512 L2.87025003,20.0703309 C2.43079253,20.5097884 2.43079253,21.2196812 2.87025003,21.6591387 C3.30970753,22.0985962 4.01960041,22.0985962 4.45905791,21.6591387 L11.4340372,14.7066957 L18.3977483,21.6704069 C18.8372058,22.1098644 19.5470987,22.1098644 19.9865562,21.6704069 C20.4260137,21.2309494 20.4260137,20.5210565 19.9865562,20.081599 L13.0228451,13.1178879 L14.6792618,11.4614711 Z" id="Shape" fill={iconColor} fillRule="nonzero" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          }
          {icon === "sharp" &&
            <svg width="22px" height="20px" viewBox="0 0 22 20" version="1.1">
                <g id="Page-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(-1379.000000, -720.000000)">
                        <g id="Group-10" transform="translate(1054.000000, 90.000000)">
                            <g id="Group-9" transform="translate(312.000000, 616.000000)">
                                <g id="round-restaurant_menu-24px" transform="translate(12.000000, 12.000000)">
                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                    <path d="M7.0394622,13.5010047 L10.2283461,10.3121208 L3.25336682,3.34840963 C2.71249606,2.80753886 1.77724035,2.95402469 1.43919612,3.65264944 C0.639158114,5.33160244 0.93212978,7.39367224 2.31811112,8.79092173 L7.0394622,13.5010047 Z M14.6792618,11.4614711 C16.4032874,12.2615092 18.8259377,11.6981021 20.6175721,9.90646768 C22.769787,7.75425276 23.1867082,4.66678213 21.5302915,3.0103654 C19.8851429,1.36521682 16.7976723,1.77086989 14.6341892,3.92308482 C12.8425548,5.71471924 12.2791478,8.13736955 13.0791858,9.86139512 L2.87025003,20.0703309 C2.43079253,20.5097884 2.43079253,21.2196812 2.87025003,21.6591387 C3.30970753,22.0985962 4.01960041,22.0985962 4.45905791,21.6591387 L11.4340372,14.7066957 L18.3977483,21.6704069 C18.8372058,22.1098644 19.5470987,22.1098644 19.9865562,21.6704069 C20.4260137,21.2309494 20.4260137,20.5210565 19.9865562,20.081599 L13.0228451,13.1178879 L14.6792618,11.4614711 Z" id="Shape" fill={iconColor} fillRule="nonzero" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
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
            <MenuItem value={'sharp'}>Sharp</MenuItem>
            <MenuItem value={'rounded'}>Rounded</MenuItem>
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
        <FormControl>
          <ColorPickerLabel>
            Icon color
          </ColorPickerLabel>
          <StyledTwitterPicker id="icon-color-picker" color={iconColor} onChange={(color, event) => handleIconColorChange(color.hex)} triangle="hide" disabled={icon === "emoji"}/>
        </FormControl>

      </Grid>
      <Grid item sm={12} md={12} lg={6} xl={6}>
        <FormControl>
          <ColorPickerLabel>
            Background color
          </ColorPickerLabel>
          <StyledTwitterPicker color={backgroundColor} onChange={(color, event) => handleBackgroundColorChange(color.hex)} triangle="hide"/>
        </FormControl>
      </Grid>
    </Grid>
  </WidgetCustomizerContainer>
);

export default WidgetCustomizer;
