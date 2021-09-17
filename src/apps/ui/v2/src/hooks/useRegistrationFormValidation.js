import { useState } from 'react';

const formInitVals = {
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
  confirmPassword: '',
  message: '',
  formSubmitted: false,
  success: false,
};

export const useRegistrationFormValidation = () => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(formInitVals);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({});
  const validate = (fieldValues = values) => {
    // this function will check if the form values are valid
  };
  const handleInputValue = (fieldValues = values) => {
    // this function will be triggered by the text field's onBlur and onChange events
  };
  const handleFormSubmit = async (e) => {
    // this function will be triggered by the submit event
  };
  const formIsValid = () => {
    // this function will check if the form values and return a boolean value
  };
  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};
