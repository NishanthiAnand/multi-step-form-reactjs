import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { formSchema } from '../../form-schema/multistep-schema';
import { Form } from '../Form';
import { IFormModal, IForm } from '../FormBuilder/interfaces';
import styled from 'styled-components';
import { useFormik } from 'formik';

const steps: IForm[] = formSchema;

const FormButton = styled(Button)`
  background-color: blue;
`;

const StepWrapper = styled.div`
  margin-top:30px;
`;

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState<IFormModal>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isAustralian: false
  });

  const formik = useFormik({
    initialValues: formData,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    setActiveStep(0);
  };

  const handleInputData = (input: any) => (e: { target: { value: any; }; }) => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState: any) => ({
      ...prevState,
      [input]: value
  }));
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step key={step.stepName} {...stepProps}>
              <StepLabel {...labelProps}>{step.stepName}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length-1 ? (
        <React.Fragment>
          {/* Add summary component */}
          <h1>{formData.firstName}</h1>
          <h1>{formData.lastName}</h1>
          <h1>{formData.email}</h1>
          <h1>{formData.phoneNumber}</h1>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <FormButton onClick={handleSubmit}>Submit</FormButton>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StepWrapper>
            <form onSubmit={formik.handleSubmit}>
              <Form fields={steps[activeStep].fields} handleFormData={handleInputData} values={formData}></Form>
            </form>
            
          </StepWrapper>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <FormButton
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </FormButton>
            <Box sx={{ flex: '1 1 auto' }} />
              <FormButton onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </FormButton>
            </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export const FormStepper = () => {
  return (
    <>
      <HorizontalLinearStepper></HorizontalLinearStepper>
    </>
  )
}