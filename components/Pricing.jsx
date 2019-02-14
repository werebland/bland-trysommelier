import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const PricingWrapper = styled.section`
  width: 100%;
`;

const PricingGrid = styled(Grid)`

`;

const Pricing = ({}) => (
  <PricingWrapper>
    <PricingGrid container>
      <Grid item>
        Appetizer
      </Grid>
      <Grid item>
        Entree
      </Grid>
      <Grid item>
        Dessert
      </Grid>
    </PricingGrid>
  </PricingWrapper>
);

export default Pricing;
