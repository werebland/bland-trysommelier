import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  background: #1f1f1f;
  color: #fff;
  padding: 24px 120px;
  box-sizing: border-box;
`;

const SommLogo = styled.div`
  width: 120px;
  height: 32px;

  & svg {
    fill: #fff;
  }
`;

const Footer = ({}) => (
  <FooterWrapper className="footer">
    <SommLogo>
      <svg version="1.1" x="0px" y="0px" width="120px" height="32.1px" viewBox="0 0 120 32.1">
        <g>
          <g>
            <path className="st0" d="M10.9,5.3C9.4,5.3,8.3,5.8,8.3,7c0,4.1,13,1.8,13,10.7c0,5.1-4.5,7.6-10,7.6c-4.1,0-8.4-1.5-11.4-4l2.5-5.1
              c2.5,2.2,6.4,3.7,9,3.7c1.9,0,3.1-0.7,3.1-2c0-4.2-13-1.7-13-10.4C1.6,2.9,5.5,0,11.4,0c3.6,0,7.3,1.1,9.9,2.8l-2.4,5.1
              C16.3,6.4,13,5.3,10.9,5.3z"/>
            <path className="st0" d="M43.1,15.5c0,5.9-4.2,9.8-10.5,9.8c-6.3,0-10.4-3.9-10.4-9.8c0-5.9,4.1-9.8,10.4-9.8
              C38.9,5.7,43.1,9.6,43.1,15.5z M28.5,15.5c0,2.9,1.7,4.8,4.1,4.8c2.5,0,4.1-1.9,4.1-4.8c0-2.8-1.7-4.7-4.1-4.7
              C30.2,10.8,28.5,12.7,28.5,15.5z"/>
            <path className="st0" d="M76.9,13v12h-6.3V14.8c0-2.2-1.2-3.5-3.1-3.5c-2.2,0-3.6,1.8-3.6,4.3V25h-6.3V14.8c0-2.2-1.2-3.5-3.1-3.5
              c-2.2,0-3.6,1.8-3.6,4.3V25h-6.3V5.9h6.3v3.1c1.3-2.2,3.5-3.4,6.2-3.4c3.1,0,5.4,1.6,6.4,4.3c1.2-2.8,3.6-4.3,6.7-4.3
              C74.1,5.7,76.9,8.5,76.9,13z"/>
            <path className="st0" d="M111,13v12h-6.3V14.8c0-2.2-1.2-3.5-3.1-3.5c-2.2,0-3.6,1.8-3.6,4.3V25h-6.3V14.8c0-2.2-1.2-3.5-3.1-3.5
              c-2.2,0-3.6,1.8-3.6,4.3V25h-6.3V5.9h6.3v3.1c1.3-2.2,3.5-3.4,6.2-3.4c3.1,0,5.4,1.6,6.4,4.3c1.2-2.8,3.6-4.3,6.7-4.3
              C108.2,5.7,111,8.5,111,13z"/>
          </g>
          <rect x="9" y="27.1" className="st0" width="111" height="4.9"/>
        </g>
      </svg>
    </SommLogo>
  </FooterWrapper>
);

export default Footer;
