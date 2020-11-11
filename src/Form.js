import React from 'react';
import classNames from 'classnames';
import { useForm } from './hooks';
import { validate } from './FormValidationRules';
import { TextInput, Button } from './components';

const Form = () => {
  // Initial form values.
  const initValues = {
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
  };

  // Show alert with user data on successful form submission.
  const showAlert = ({ firstName, lastName, address, address2 }) => {
    window.alert(
      `First Name: ${firstName}\nLast Name: ${lastName}\nAddress: ${address}${
        address2 && `\nAddress 2: ${address2}`
      }`
    );
  };

  // Deconstruct form data from useForm hook.
  const { errors, values, handleChange, handleSubmit } = useForm(
    showAlert,
    initValues,
    validate
  );

  // Deconstruct form values
  const { firstName, lastName, address, address2 } = values;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextInput
        label="First Name"
        name="firstName"
        type="text"
        value={firstName}
        onChange={handleChange}
        error={errors.firstName}
        className={classNames({ error: errors.firstName && !firstName })}
      />
      <TextInput
        label="Last Name"
        name="lastName"
        type="text"
        value={lastName}
        onChange={handleChange}
        error={errors.lastName}
        className={classNames({ error: errors.lastName && !lastName })}
      />
      <TextInput
        label="Address"
        name="address"
        type="text"
        value={address}
        onChange={handleChange}
        error={errors.address}
        className={classNames({ error: errors.address && !address })}
      />
      <TextInput
        label="Address 2 (Optional)"
        name="address2"
        type="text"
        value={address2}
        onChange={handleChange}
        error={errors.address2}
        className={classNames({ error: errors.address2 && !address2 })}
      />
      <Button type="submit" value="Next" />
    </form>
  );
};

export default Form;
