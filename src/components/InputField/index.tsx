import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';

export const Label = styled(InputLabel)`
  margin-bottom: 10px;
`;

export const InputField = ({field, handleFormData, values}: any) => {
  return(
    <>
      <Label>{field.props.label}</Label>
      <TextField
      value={values[field.props.name]}
      required
      onChange={handleFormData(field.props.name)}
      id="outlined-required"
      variant="outlined"
      />
    </>

  )
}
