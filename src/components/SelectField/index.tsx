import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { Label } from '../InputField'

const SelectElement = styled(Select)`
  width:200px;
`;

export const SelectField = 
({field, handleFormData, values}: any) => {
  return (
    <>
      <Label>{field.props.label}</Label>
      <SelectElement
        labelId={field.props.name}
        id={field.props.name}
        value={values[field.props.name]}
        label={field.props.label}
        onChange={handleFormData(field.props.name)}
      >
        {/* Menu items must be configurable and not hardcoded. */}
        <MenuItem value={'yes'}>Yes</MenuItem>
        <MenuItem value={'no'}>No</MenuItem>
      </SelectElement>
    </>
  );
}

