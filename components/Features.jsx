import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Element } from 'react-scroll'

const FeaturesContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 136px 16px 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 960px) {
    padding: 136px 120px 16px;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f1f1f;
  margin: 0 auto;
  display: inline-block;
  text-align: center;

  & span {
    display: block;
    position: relative;
  }

  & span:after {
    content: "";
    width: 100%;
    height: 8px;
    background: #f94343;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 4px;
    z-index: -1;
  }
`;

const SectionSubtitle = styled.h3`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f1f1f;
  margin: 0 auto 136px;
  display: inline-block;
  text-align: center;

  &:after {
    content: "";
    width: 100%;
    height: 8px;
    background: #f94343;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 4px;
    z-index: -1;
  }
`;

const ComparisonGrid = styled(Grid)`
  width: 100%;
  max-width: 720px;
  padding: 16px 0;
  margin-bottom: 136px !important;
`;

const ComparisonCard = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  padding: 32px 0;
  border-radius: 8px;
`;

const ComparisonCardTitle = styled.h5`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #1f1f1f;
  position: relative;
  margin: 0 0 8px;

  &:after {
    content: "";
    width: 100%;
    height: 8px;
    background: #f94343;
    display: block;
    position: absolute;
    bottom: 2px;
    left: 4px;
    z-index: -1;
  }
`;

const ComparisonCardSubtitle = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Source Sans Pro', sans-serif;
  color: #9f9f9f;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const ComparisonCardItems = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const ComparisonCardItem = styled.li`
  list-style: none;
  display: inline-flex;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Source Sans Pro', sans-serif;
  color: #1f1f1f;
`;

const FeatureCard = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  position: relative;
  margin-bottom: 68px;
`;

const FeatureCardTitle = styled.h5`
  display: inline-flex;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #1f1f1f;
  margin: 0 0 4px;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 8px;
    background: #f94343;
    display: block;
    position: absolute;
    bottom: 0;
    left: 4px;
    z-index: -1;
  }
`;

const FeatureCardCopy = styled.p`
  padding: 0;
  margin: 0;
  display: inline-flex;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: 'Source Sans Pro', sans-serif;
  color: #1f1f1f;
`;

const FeatureCardIcon = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 60px;
  height: 60px;

  & svg {
    transform: scale(2.5);
    opacity: .25;
    color: #f94343;
    fill: #f94343;
  }
`;

const Features = ({}) => (
  <Element name="features">
    <FeaturesContainer>
      <SectionTitle>
        Your menu converts browsers to diners.
      </SectionTitle>
      <SectionSubtitle>Supercharge it with Somm.</SectionSubtitle>
      <ComparisonGrid container spacing={16}>
        <Grid item sm={12} md={6} lg={6} xl={6}>
          <ComparisonCard>
            <ComparisonCardTitle>
              Then
            </ComparisonCardTitle>
            <ComparisonCardSubtitle>
              without somm
            </ComparisonCardSubtitle>
            <ComparisonCardItems>
              <ComparisonCardItem>
                Static PDF, JPEG, or HTML
              </ComparisonCardItem>
              <ComparisonCardItem>
                Buried in menus
              </ComparisonCardItem>
              <ComparisonCardItem>
                Not searchable
              </ComparisonCardItem>
              <ComparisonCardItem>
                Not sortable
              </ComparisonCardItem>
              <ComparisonCardItem>
                Not filterable
              </ComparisonCardItem>
              <ComparisonCardItem>
                Not sharable
              </ComparisonCardItem>
              <ComparisonCardItem>
                No insights
              </ComparisonCardItem>
            </ComparisonCardItems>
          </ComparisonCard>
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={6}>
          <ComparisonCard style={{border: '2px solid #f94343'}}>
            <ComparisonCardTitle>
              Now
            </ComparisonCardTitle>
            <ComparisonCardSubtitle>
              with somm
            </ComparisonCardSubtitle>
            <ComparisonCardItems>
              <ComparisonCardItem>
                Dynamic JS
              </ComparisonCardItem>
              <ComparisonCardItem>
                Embedded in your home page
              </ComparisonCardItem>
              <ComparisonCardItem>
                Searchable
              </ComparisonCardItem>
              <ComparisonCardItem>
                Sortable
              </ComparisonCardItem>
              <ComparisonCardItem>
                Filterable
              </ComparisonCardItem>
              <ComparisonCardItem>
                Sharable
              </ComparisonCardItem>
              <ComparisonCardItem>
                Valuable insights
              </ComparisonCardItem>
            </ComparisonCardItems>
          </ComparisonCard>
        </Grid>
      </ComparisonGrid>
      <Grid container spacing={16} style={{marginBottom: '68px'}}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <FeatureCard>
            <FeatureCardIcon>
              <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
            </FeatureCardIcon>
            <FeatureCardTitle>
              Simple
            </FeatureCardTitle>
            <FeatureCardCopy>
              With a single line of code, you can have Somm up and running on your website. No plugins or code bases to manage, upgrading your menu with Somm is as simple as copy and paste.
            </FeatureCardCopy>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <FeatureCard>
            <FeatureCardIcon>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </FeatureCardIcon>
            <FeatureCardTitle>
              Feature-rich
            </FeatureCardTitle>
            <FeatureCardCopy>
              From instantly searchable and sortable menu items to powerful filters and thoughtful design, Somm has been designed from the ground up to offer your diners with the most features to find exactly what they’re looking for in your menu.
            </FeatureCardCopy>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <FeatureCard>
            <FeatureCardIcon>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </FeatureCardIcon>
            <FeatureCardTitle>
              Insightful
            </FeatureCardTitle>
            <FeatureCardCopy>
              See exactly what your diners are interested in like never before. Every item click and share are stored, so you can see what is engaging your diners and what you can focus your attention on.
            </FeatureCardCopy>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <FeatureCard>
            <FeatureCardIcon>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/></svg>
            </FeatureCardIcon>
            <FeatureCardTitle>
              Engaging
            </FeatureCardTitle>
            <FeatureCardCopy>
              Somm encourages your diners to engage with your website. This helps lead to more bookings and a larger social media participation, helping you reach your business goals.
            </FeatureCardCopy>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <FeatureCard>
            <FeatureCardIcon>
              <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"/></svg>
            </FeatureCardIcon>
            <FeatureCardTitle>
              Dynamic
            </FeatureCardTitle>
            <FeatureCardCopy>
              As your menu changes, so does Somm. Add specials, item options, and multiple menus, supercharging your menu to do what it does best: convert potential diners.
            </FeatureCardCopy>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <FeatureCard>
            <FeatureCardIcon>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </FeatureCardIcon>
            <FeatureCardTitle>
              Valuable
            </FeatureCardTitle>
            <FeatureCardCopy>
              For less than a coffee a day, Somm can provide your diners with a feature-rich and engaging experience while offering your business valuable insights and time-saving simplicity.
            </FeatureCardCopy>
          </FeatureCard>
        </Grid>
      </Grid>
    </FeaturesContainer>
  </Element>

);

export default Features;
