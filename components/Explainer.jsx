import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

const ExplainerContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 16px;
  box-sizing: border-box;
  margin: auto;

  @media only screen and (max-width: 959px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const ExplainerBlurb = styled.article`
  height: 100%;
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`;

const ExplainerBlurbTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #1f1f1f;
  margin: 0 0 24px;
`;

const ExplainerBlurbCopy = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: #1f1f1f;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0 0 16px;
  padding: 0;
`;

const ExplainerHighlight = styled.article`
  height: 100%;
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`;

const ExplainerFeatures = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;

  & .react-reveal {
    margin-bottom: 16px;
  }
`;

const ExplainerFeature = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 0 16px;
  box-sizing: border-box;
  height: 100%;
  min-height: 120px;
  border-left: 2px solid #f94343;
`;
const ExplainerFeatureTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  background: #f94343;
  padding: 4px 16px;
  margin: 0 0 8px;
`;

const ExplainerFeatureCopy = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: #1f1f1f;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
`;

const ExplainerAccessLink = styled.a`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 2px solid #1f1f1f;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #1f1f1f;
  }
`;

const Explainer = ({}) => (
  <ExplainerContainer className="explainer">
    <ExplainerBlurb className="explainer__blurb">
      <Fade bottom>
        <ExplainerBlurbTitle className="explainer__blurbTitle">
          So what even is Somm, anyway?
        </ExplainerBlurbTitle>
        <ExplainerBlurbCopy className="explainer__blurbCopy">
          Somm is an embeddable widget for your restaurant website. But it is so much more than a few lines of code. Instead of having to sort through pages and comb through PDFs, your guests can use a beautiful app right on your homepage. This lets them find the items they’re looking for, by category, search, or filter, saving you from repetitive phone calls. Every interaction also generates insights for you, allowing you a view into the behaviors of your guests before they even step foot in your restaurant.
          <br/>
          <br/>
          In short, Somm is the perfect tool to fuel the growth of your business. <strong>Try it free today.</strong>
        </ExplainerBlurbCopy>
        <Link href="/get-access">
          <ExplainerAccessLink>
            Get early access
          </ExplainerAccessLink>
        </Link>
      </Fade>
    </ExplainerBlurb>
    <ExplainerHighlight className="explainer__highlight">
        <ExplainerFeatures className="explainer__features">
          <Fade bottom>
            <ExplainerFeature className="explainer__feature">
              <ExplainerFeatureTitle className="explainer__featureTitle">
                Valuable
              </ExplainerFeatureTitle>
              <ExplainerFeatureCopy className="explainer__featureCopy">
                For less than a coffee a day, Somm can provide your diners with a feature-rich and engaging experience while offering your business valuable insights and time-saving simplicity.
              </ExplainerFeatureCopy>
            </ExplainerFeature>
            <ExplainerFeature className="explainer__feature">
              <ExplainerFeatureTitle className="explainer__featureTitle">
                Dynamic
              </ExplainerFeatureTitle>
              <ExplainerFeatureCopy className="explainer__featureCopy">
                As your menu changes, so does Somm. Add specials, item options, and multiple menus, supercharging your menu to do what it does best: convert potential diners.
              </ExplainerFeatureCopy>
            </ExplainerFeature>
            <ExplainerFeature className="explainer__feature">
              <ExplainerFeatureTitle className="explainer__featureTitle">
                Insightful
              </ExplainerFeatureTitle>
              <ExplainerFeatureCopy className="explainer__featureCopy">
                See exactly what your diners are interested in like never before. Every item click and share are stored, so you can see what is engaging your diners and what you can focus your attention on.
              </ExplainerFeatureCopy>
            </ExplainerFeature>
          </Fade>
        </ExplainerFeatures>
    </ExplainerHighlight>
  </ExplainerContainer>
);

export default Explainer;
