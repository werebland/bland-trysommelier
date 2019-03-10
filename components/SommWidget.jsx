import React, { Component } from 'react';
import PropTypes from 'prop-types';
import posed, {PoseGroup} from 'react-pose'
import styled, { keyframes } from 'styled-components';
import vhCheck from 'vh-check'

const WidgetContainer = styled.div`
  position: fixed;
  ${props => props.position}: ${props => props.position == "left" ? '64px' : '26px'};
  bottom: 16px;
  z-index: 8;
`;

const WidgetToggle = styled.div`
  width: 48px;
  height: 48px;
  background: ${props => props.background};
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const WidgetFrame = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  init: {
    scale: 0,
    opacity: 0,
  }
})

const StyledWidgetFrame = styled(props => <WidgetFrame {...props} />)`
  width: calc(100vw - 32px);
  max-width: 360px;
  height: ${props => `calc(${props.viewportHeight}px - 32px - 64px)`};
  max-height: 600px;
  display: block;
  border: 0;
  appearance: none;
  background: #FFFFFF;
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  bottom: 64px;
  ${props => props.position}: ${props => props.position == "left" ? '-48px' : '0'};
  scale: 1;
  opacity: 1;
  transform-origin: bottom ${props => props.position};
`;

const WidgetToggleIcon = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  init: {
    scale: 0,
    opacity: 0,
  }
})

const StyledWidgetToggleIcon = styled(props => <WidgetToggleIcon {...props} />)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  scale: 1;
  opacity: 1;
`;

const spinnerAnimation = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  border-radius: 8px;

  & iframe {
    border-radius: 8px;
  }
`;

const Spinner = styled.div`
  display: inline-flex;
  position: relative;
  width: 64px;
  height: 64px;

  & div {
    position: absolute;
    border: 4px solid ${props => props.color};
    opacity: 1;
    border-radius: 50%;
    animation: ${spinnerAnimation} 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite
  }

  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`

class Widget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hasOpened: false,
    }
  }

  handleToggle() {

  }

  render() {

    var test = vhCheck()
    console.log(test);

    return (
      <WidgetContainer position={this.props.position}>
        <PoseGroup>
          {this.state.open &&
            <StyledWidgetFrame key="0" viewportHeight={test.windowHeight} position={this.props.position}>
              <SpinnerWrapper>
                <iframe
                  style={{ zIndex: 8, position: 'absolute', top: 0, left: 0, background: 'transparent', display: 'block' }}
                  src={`https://bland-sommelier.herokuapp.com/${this.props.username}`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-top-navigation"
                  width="100%"
                  height="100%"
                  frameBorder="0">
                </iframe>
                <Spinner color={this.props.iconColor}>
                  <div></div>
                  <div></div>
                </Spinner>
              </SpinnerWrapper>

            </StyledWidgetFrame>
          }
        </PoseGroup>
        <WidgetToggle background={this.props.backgroundColor} onClick={() => this.setState({ open: !this.state.open, hasOpened: true })}>
          <PoseGroup>
            {this.state.open
              ?
                <StyledWidgetToggleIcon key="0">
                  <svg fill={this.props.iconColor} width="18px" height="18px" viewBox="0 0 16 16" version="1.1">
                      <g id="Page-4" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Search" transform="translate(-46.000000, -45.000000)" fill={this.props.iconColor} fillRule="nonzero">
                              <g id="Group" transform="translate(32.000000, 32.000000)">
                                  <g id="Group-2" transform="translate(14.000000, 11.000000)">
                                      <polygon id="Shape" points="15.5555556 3.56666667 13.9888889 2 7.77777778 8.21111111 1.56666667 2 0 3.56666667 6.21111111 9.77777778 0 15.9888889 1.56666667 17.5555556 7.77777778 11.3444444 13.9888889 17.5555556 15.5555556 15.9888889 9.34444444 9.77777778"></polygon>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                </StyledWidgetToggleIcon>
              :
                <StyledWidgetToggleIcon key="1">
                  <svg width="22px" height="20px" viewBox="0 0 22 20" version="1.1">
                      <g id="Page-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Desktop-HD" transform="translate(-1379.000000, -720.000000)">
                              <g id="Group-10" transform="translate(1054.000000, 90.000000)">
                                  <g id="Group-9" transform="translate(312.000000, 616.000000)">
                                      <g id="round-restaurant_menu-24px" transform="translate(12.000000, 12.000000)">
                                          <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                          <path d="M7.0394622,13.5010047 L10.2283461,10.3121208 L3.25336682,3.34840963 C2.71249606,2.80753886 1.77724035,2.95402469 1.43919612,3.65264944 C0.639158114,5.33160244 0.93212978,7.39367224 2.31811112,8.79092173 L7.0394622,13.5010047 Z M14.6792618,11.4614711 C16.4032874,12.2615092 18.8259377,11.6981021 20.6175721,9.90646768 C22.769787,7.75425276 23.1867082,4.66678213 21.5302915,3.0103654 C19.8851429,1.36521682 16.7976723,1.77086989 14.6341892,3.92308482 C12.8425548,5.71471924 12.2791478,8.13736955 13.0791858,9.86139512 L2.87025003,20.0703309 C2.43079253,20.5097884 2.43079253,21.2196812 2.87025003,21.6591387 C3.30970753,22.0985962 4.01960041,22.0985962 4.45905791,21.6591387 L11.4340372,14.7066957 L18.3977483,21.6704069 C18.8372058,22.1098644 19.5470987,22.1098644 19.9865562,21.6704069 C20.4260137,21.2309494 20.4260137,20.5210565 19.9865562,20.081599 L13.0228451,13.1178879 L14.6792618,11.4614711 Z" id="Shape" fill={this.props.iconColor} fillRule="nonzero" />
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                </StyledWidgetToggleIcon>
            }
          </PoseGroup>
        </WidgetToggle>
      </WidgetContainer>
    );
  }

}

export default Widget;
