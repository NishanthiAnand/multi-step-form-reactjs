export interface IForm {
  element: string;
  stepCount: string;
  stepName: string;
  fields: IFormFields[];
}

export interface IFormFields {
  id: string;
  type: string;
  props: { label: string, name: string};
}

export interface IFormFieldProps {
  label: string;
  name: string;
}


export interface IFormModal {
  firstName: string,
  lastName: string
  email: string
  phoneNumber: string
  isAustralian: boolean
}