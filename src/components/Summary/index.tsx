import * as React from 'react';
import styled from 'styled-components';

const SummaryWrapper = styled.div`
  text-align: middle;
`;

const Paragraph = styled.p`
  text-align: middle;
  font-size: 20px
`;

export const Summary = ({formFields, formValues}: any) => {
  return (
    <>
      <SummaryWrapper>
        {formFields.map((field: any) => {
          return (
            <Paragraph><strong>{field.props.label} : </strong>{formValues[field.props.name]}</Paragraph>
          );
        })}
      </SummaryWrapper>
    </>
  )
}