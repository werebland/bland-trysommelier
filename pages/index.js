import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import posed from 'react-pose'

import Nav from '../components/Nav'

const PageWrapper = styled.div`

`;

const Hero = styled.section`
  width: 100%;
  height: 95vh;
  padding: 60px 16px 240px 16px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: #f94343;

    @media only screen and (min-width: 600px) {
      height: 75vh;
    }
`;

const HeroTitle = styled.h1`
  width: 100%;
  max-width: 360px;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  margin-bottom: 24px;

    @media only screen and (min-width: 600px) {
      font-size: 2.5rem;
    }
`;

const HeroButton = styled(Button)`
  width: 100%;
  max-width: 360px;
  height: 60px !important;
  min-height: 60px;
  background: #fff !important;
  color: #1f1f1f !important;
  font-size: 1.125rem !important;
  font-weight: 500 !important;
  text-transform: none !important;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32) !important;
  position: relative;
  text-decoration: none !important;
`;

const HeroButtonLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DemoContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  margin-top: -240px;
  z-index: 8;
  padding: 0 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 600px) {
    flex-flow: row nowrap;
    justify-content: center;
  }
`;

const Demo = styled.div`
  width: 100%;
  max-width: 360px;
  height: 600px;
  display: block;
  background: aliceblue;
  border-radius: 8px;
  order: -1;
  margin: auto;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32);

  @media only screen and (min-width: 600px) {
    margin: 0 16px 0;
    order: 0;
  }
`;

const PosedDemoCards = posed.div({
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -32,
    opacity: 0,
  },
})

const DemoCards = styled((props) => <PosedDemoCards {...props} />)`
  display: flex;
  flex-flow: column nowrap;
  padding-top: 16px;

  @media only screen and (min-width: 600px) {
    width: 100%;
    max-width: 360px;
    padding-top: 0;
  }
`;

const PosedDemoCardContainer = posed.div({

})

const DemoCardContainer = styled((props) => <PosedDemoCardContainer {...props} />)`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32);
  background: #fff;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const DemoCardIcon = styled.div`
  width: 64px;
  min-width: 64px;
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const DemoCardContent = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  font-size: .875rem;
  font-weight: 500;
  color: #9f9f9f;
`;

const DemoCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1f1f1f;
  margin: 0 0 8px;
`;

const DemoCard = ({icon, title, content}) => (
  <DemoCardContainer>
    <DemoCardIcon>
      {icon}
    </DemoCardIcon>
    <DemoCardContent>
      <DemoCardTitle>
        {title}
      </DemoCardTitle>
      {content}
    </DemoCardContent>
  </DemoCardContainer>
);

class Index extends Component {

  render() {
    return (
      <PageWrapper>
        <Nav />
        <Hero>
          <HeroTitle className="hero__title">
            Meet your menu's personal assistant
          </HeroTitle>
          <HeroButton className="hero__button" alt="Get started" variant="contained">
            <Link href="/get-started">
              <HeroButtonLink>Add your menu</HeroButtonLink>
            </Link>
          </HeroButton>
        </Hero>
        <DemoContainer>
          <DemoCards>
            <DemoCard icon="code" title="Simple" content="With a single line of code, you can have Sommelier up and running on your website. No plugins or code bases to manage, upgrading your menu with Sommelier is as simple as copy and paste."/>
            <DemoCard icon="stars" title="Feature-rich" content="From instantly searchable and sortable menu items to powerful filters and thoughtful design, Sommelier has been designed from the ground up to offer your diners with the most features to find exactly what they’re looking for in your menu."/>
            <DemoCard icon="stars" title="Insightful" content="See exactly what your diners are interested in like never before. Every item click and share are stored, so you can see what is engaging your diners and what you can focus your attention on."/>
          </DemoCards>
          <Demo>
            Demo
          </Demo>
          <DemoCards>
            <DemoCard icon="user" title="Engaging" content="Sommelier encourages your diners to engage with your website. This helps lead to more bookings and a larger social media participation, helping you reach your business goals."/>
            <DemoCard icon="lightning bolt" title="Dynamic" content="As your menu changes, so does Sommelier. Add specials, item options, and multiple menus, supercharging your menu to do what it does best: convert potential diners."/>
            <DemoCard icon="diamond" title="Valuable" content="For less than a coffee a day, Sommelier can provide your diners with a feature-rich and engaging experience while offering your business valuable insights and time-saving simplicity."/>

          </DemoCards>

        </DemoContainer>
      </PageWrapper>
    );
  }

}

export default Index;
