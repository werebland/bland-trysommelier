import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const PricingWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 960px) {
    padding: 16px 120px;
  }
`;

const PricingTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  background: #f94343;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
`;

const PricingSubtitle = styled.h5`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #1f1f1f;
  margin: 0 auto 24px;
  text-align: center;
`;

const PricingGrid = styled(Grid)`
  width: 100%;
  box-sizing: border-box;
`;

const PricingCardContainer = styled.article`
  width: 100%;
  border: 4px solid ${props => props.primary ? '#f94343' : '#1f1f1f'};
  border-radius: 0;
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const PricingCardTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.primary ? '#f94343' : '#1f1f1f'};
  margin: 0 0 16px;
`;

const PricingCardPrice = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: #1f1f1f;
  position: relative;
  padding: 0 16px;
  display: flex;
  align-items: flex-start;
  line-height: 4rem;

  &::before {
    content: "$";
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 800;
  }
`;

const PricingCardPriceSubtitle = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  color: #9f9f9f;
  font-size: 1rem;
`;

const Pricing = ({}) => (
  <PricingWrapper>
    <PricingTitle>
      Pricing
    </PricingTitle>
    <br/>
    <PricingSubtitle>Where guac is never extra</PricingSubtitle>
    <PricingGrid container spacing={8}>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <PricingCardContainer>
          <PricingCardTitle>
            Appetizer
          </PricingCardTitle>
          <PricingCardPrice>
            0
          </PricingCardPrice>
          <PricingCardPriceSubtitle>
            monthly
          </PricingCardPriceSubtitle>
        </PricingCardContainer>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <PricingCardContainer primary>
          <PricingCardTitle primary>
            Entree
          </PricingCardTitle>
          <PricingCardPrice>
            49
          </PricingCardPrice>
          <PricingCardPriceSubtitle>
            monthly
          </PricingCardPriceSubtitle>
        </PricingCardContainer>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <PricingCardContainer>
          <PricingCardTitle>
            Dessert
          </PricingCardTitle>
          <PricingCardPrice>
            Contact
          </PricingCardPrice>
          <PricingCardPriceSubtitle>
            monthly
          </PricingCardPriceSubtitle>
        </PricingCardContainer>
      </Grid>
    </PricingGrid>
  </PricingWrapper>
);

export default Pricing;
