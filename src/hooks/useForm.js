import { useState, useEffect } from 'react';

/**
 * Custom hook to handle necessary form actions.
 *
 * @param {function} callback
 * @param {object} data
 * @param {function} validate
 *
 * @return {object}
 */
const useForm = (callback, data, validate) => {
  // Set initial state
  const [values, setValues] = useState(data);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Prevent the form from submitting on render

  useEffect(() => {
    // Trigger the callback function if there are no errors.
    if (Object.keys(errors).length === 0 && isSubmitted) {
      callback(values);
    }
  }, [errors, callback, isSubmitted, values]);

  const handleChange = (event) => {
    event.persist();

    // Set submitting state to false on input change
    setIsSubmitted(false);

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    // Set errors based on the form validation rules.
    setErrors(validate(values));
  };

  // Return object of form actions/states.
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
