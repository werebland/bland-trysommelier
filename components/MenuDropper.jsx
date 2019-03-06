import React from 'react';
import Dropzone from 'react-dropzone'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const MenuDropperContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  box-sizing: border-box;
`;

const MenuDropper = ({}) => (
  <MenuDropperContainer>
    <Grid container spacing={16}>
      <Grid item sm={12} md={12} lg={6} xl={6}>
        Dropzone
      </Grid>
      <Grid item sm={12} md={12} lg={6} xl={6}>
        Items
      </Grid>
    </Grid>
  </MenuDropperContainer>
);

export default MenuDropper;
