import React from 'react';
import { Button } from './styles';

const SubmitButton = ({ type, value }) => (
  <Button type={type} value={value}>
    {value}
  </Button>
);

export default SubmitButton;
