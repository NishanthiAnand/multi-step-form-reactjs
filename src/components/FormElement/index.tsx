import React from 'react';
import { InputField } from '../InputField';
import { SelectField } from '../SelectField';
import { IFormFields, IFormModal } from '../FormBuilder/interfaces'

interface IFormElementProps {
  field:IFormFields;
  handleFormData: (input: any) => void;
  values: IFormModal;
}

export const FormElement = ({field, handleFormData, values}: IFormElementProps) => {
  let Element = InputField;

  // Must add a different logic to be more robust
  if(field && field.type === 'text') {
    Element = InputField;
  }
  if(field && field.type === 'select') {
    Element = SelectField;
  }
  return (
    <>
      <Element field={field} handleFormData={handleFormData} values={values}></Element>
    </>
  )
}
