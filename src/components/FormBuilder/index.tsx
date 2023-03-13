import React from 'react';
import styled from 'styled-components';
import { FormStepper } from '../FormStepper';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Formwrapper = styled.div`
  margin: auto;
  width: 80%;
  border: 1px solid grey;
  padding: 30px;
`;

export const H1 = styled.h1`
  color: Blue;
`;

export const FormBuilder: React.FC = () => {
  return(
    <>
      <Wrapper>
        <H1>Multi Step Sign Up</H1>
        <Formwrapper>
          <FormStepper></FormStepper>
        </Formwrapper>
      </Wrapper>
    </>
  )
}