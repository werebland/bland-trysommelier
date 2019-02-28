import React from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'

import RestaurantForm from './RestaurantForm'
import MenuAdder from './MenuAdder'

const StepperContentContainer = styled.div`
  width: 100%;
`;

const PosedStepperContent = posed.div({
  enter: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: ({ activeStep, step }) =>
      step > activeStep ? 300 : -300
  }
})

const StepperContent = ({restaurant, activeStep, handleName, handleRestaurantChange, menus, handleDrop, handleRemove}) => (
  <StepperContentContainer>
    <PoseGroup activeStep={activeStep}>
      {activeStep === 0 &&
        <PosedStepperContent key={0} step={0}>
          <RestaurantForm
            restaurant={restaurant}
            handleChange={(target) => handleRestaurantChange(target)}/>
        </PosedStepperContent>
      }
      {activeStep === 1 &&
        <PosedStepperContent key={1} step={1}>
          <MenuAdder
            files={menus}
            handleDrop={(accepted, rejected) => handleDrop(accepted, rejected)}
            handleRemove={(i) => handleRemove(i)}
            handleName={(value, i) => handleName(value, i)}/>
        </PosedStepperContent>
      }
    </PoseGroup>
  </StepperContentContainer>
);

export default StepperContent;
