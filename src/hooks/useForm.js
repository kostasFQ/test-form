import { useState, useEffect } from "react";
import schemas from "helpers/validationSchema";

export const useForm = (initialValues) => {
  const [state, updateState] = useState({});
  const [errors, updateErrors] = useState({});
  const isValid = Object.values(errors).every((i) => !i);

  const handleSubmit = (cb) => {
    const isValid = validate(state);

    if (isValid) {
      cb(state);
    }
  };

  const updateField = (name, value) => {
    updateState({ ...state, [name]: value });
    updateErrors({ ...errors, [name]: undefined });
  };

  const validate = (data) => {
    const schema = data.paid_event ? schemas.paid : schemas.free;
    const errors = schema.validate(data).reduce((acc, curr) => {
      return {
        ...acc,
        [curr.path]: curr.message,
      };
    }, {});

    updateErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    if (initialValues && Object.keys(state).length === 0) {
      updateState(initialValues);
    }
  }, []);

  return {
    values: state,
    errors,
    isValid,
    updateField,
    validate,
    handleSubmit,
  };
};
