import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const RestaurantFormContainer = styled.div`
  width: 100%;
  max-width: 360px;
`;

const StyledTextField = styled(TextField)`
  width: 100% !important;
  max-width: 360px !important;
  margin-bottom: 16px !important;
  border-radius: 8px !important;
  font-family: 'Source Sans Pro', sans-serif !important;

  & fieldset {
    border-radius: 0 !important;
    border: 4px solid #1f1f1f !important;
  }

  & input {
    border-radius: 0 !important;
    font-family: 'Source Sans Pro', sans-serif !important;
  }
`;

const StyledFormControl = styled(FormControl)`

`;

const RestaurantForm = ({handleChange, restaurant}) => (
  <RestaurantFormContainer>
    <StyledTextField
      variant="outlined"
      label="Name"
      name="name"
      value={restaurant.name}
      onChange={(e) => handleChange(e.target)}
      autoFocus
    />
    <StyledTextField
      variant="outlined"
      label="Cuisine"
      name="cuisine"
      value={restaurant.cuisine}
      onChange={(e) => handleChange(e.target)}
    />
    <FormControl variant="outlined">
      <InputLabel
        htmlFor="outlined-age-simple"
      >
        Price
      </InputLabel>
      <Select
        value={restaurant.price}
        onChange={(e) => handleChange(e.target)}
        input={
          <OutlinedInput
            name="age"
            id="outlined-age-simple"
          />
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </RestaurantFormContainer>
);

export default RestaurantForm;
