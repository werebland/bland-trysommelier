import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

const WalkthroughContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;

  .react-reveal {
    width: 100%;
  }
`;

const WalkthroughTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #1f1f1f;
  margin: 0 0 24px;
`;

const WalkthroughStep = styled.article`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: grid;
  grid-template-columns: ${props => props.alternate ? '60% 40%' : '40% 60%'};
  grid-gap: 64px;
  margin-bottom: 32px;

  & .walkthrough__stepContent {
    order: ${props => props.alternate ? '-1' : '2'};
  }

  @media only screen and (max-width: 959px) {
    display: flex;
    flex-flow: column nowrap;

    & .walkthrough__stepContent {
      order: 2;
    }
  }
`;

const WalkthroughStepImage = styled.div`
  min-height: 360px;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const WalkthroughStepContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const WalkthroughStepContentTitle = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #1f1f1f;
  margin: 0 0 16px;
`;

const WalkthroughStepContentCopy = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: #1f1f1f;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0 0 16px;
  padding: 0;
`;

const Walkthrough = ({}) => (
  <WalkthroughContainer className="walkthrough">
    <WalkthroughTitle className="walkthrough__title">
      How Somm works.
    </WalkthroughTitle>
    <Fade bottom>
      <WalkthroughStep className="walkthrough__step walkthrough__step--1">
        <WalkthroughStepImage className="walkthrough__stepImage" image="/static/upload.svg" />
        <WalkthroughStepContent className="walkthrough__stepContent">
          <WalkthroughStepContentTitle className="walkthrough__stepContentTitle">
            Upload
          </WalkthroughStepContentTitle>
          <WalkthroughStepContentCopy className="walkthrough__stepContentCopy">
            We know that your menu changes frequently and that you already have enough on your plate. Leave the heavy lifting to us. We will take your menus and transform them into Somm items that can be viewed and sorted. You can upload any format or provide a link to your menus on your website and we will begin processing them.
          </WalkthroughStepContentCopy>
        </WalkthroughStepContent>
      </WalkthroughStep>
      <WalkthroughStep alternate className="walkthrough__step walkthrough__step--2">
        <WalkthroughStepImage className="walkthrough__stepImage" image="/static/customize.svg" />
        <WalkthroughStepContent className="walkthrough__stepContent">
          <WalkthroughStepContentTitle className="walkthrough__stepContentTitle">
            Customize
          </WalkthroughStepContentTitle>
          <WalkthroughStepContentCopy className="walkthrough__stepContentCopy">
            The beauty of Somm is in its customization. So we need to know as much as possible about your restaurant in order for you to get the most out of Somm. From your location and phone number to your cuisine and any booking or ordering URLs, we want to know it all. Further customize the color, location, and icon of your Somm widget to ensure that it integrates seamlessly with your existing website.
          </WalkthroughStepContentCopy>
        </WalkthroughStepContent>
      </WalkthroughStep>
      <WalkthroughStep className="walkthrough__step walkthrough__step--3">
        <WalkthroughStepImage className="walkthrough__stepImage" image="/static/embed.svg" />
        <WalkthroughStepContent className="walkthrough__stepContent">
          <WalkthroughStepContentTitle className="walkthrough__stepContentTitle">
            Integrate
          </WalkthroughStepContentTitle>
          <WalkthroughStepContentCopy className="walkthrough__stepContentCopy">
            Here is where the magic happens. With your menus already uploaded to our database and Somm perfectly customized to fit your needs, all it takes is copy-and-pasting three lines of code onto your website to start using Somm. Diners can start interacting with it instantly, meaning that you can start gaining valuable insights with zero transition time. Of course, we are here to walk you through every step of the process.
          </WalkthroughStepContentCopy>
        </WalkthroughStepContent>
      </WalkthroughStep>
    </Fade>
  </WalkthroughContainer>
);

export default Walkthrough;
