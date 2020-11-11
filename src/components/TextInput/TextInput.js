import React from 'react';
import { FormField, Label, ErrorMessage, Input } from './styles';

const TextInput = ({ label, name, error, value, ...props }) => (
  <FormField>
    <Label htmlFor={name}>
      {label} {error && !value && <ErrorMessage>{error}</ErrorMessage>}
    </Label>
    <Input id={name} name={name} value={value} error={error} {...props} />
  </FormField>
);

export default TextInput;
