export const validate = (values) => {
  // Specify required fields.
  const required = ['firstName', 'lastName', 'address'];
  let errors = {};

  // Map through values to add validation message.
  Object.values(values).map((val, idx) => {
    const key = Object.keys(values)[idx];

    if (required.includes(key) && !val) {
      errors[key] = 'Required';
    }

    // Map must return a value.
    return errors;
  });

  return errors;
};
