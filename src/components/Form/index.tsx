import { FormElement } from '../FormElement';
import styled from 'styled-components';
import { IFormFields, IFormModal} from '../FormBuilder/interfaces'

const FormElementWrapper =styled.div`
  margin-bottom: 40px;
`;

interface IFormProps {
  fields:IFormFields[];
  handleFormData: (input: any) => void;
  values: IFormModal;
}

export const Form = ({fields, handleFormData, values}: IFormProps) => {
  return (
    <>
      <FormElementWrapper>
        {fields && fields.map((field, index: number) => {
          return (
              <FormElement field={field} key={index} handleFormData={handleFormData} values={values}></FormElement>
          )
        })}
      </FormElementWrapper>
    </>
  )
}