import React, { useEffect, useState } from "react";

export const useHandleInput = (initalValues) => {
  const [values, setValues] = useState(initalValues);
  const [data, setData] = useState([]);
  const handleInputValue = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values);
  };
  const handleSubmitForm = (e) => {
    // e.preventDefault();
    setData([values, ...data]);
    console.log(data);
  };

  return { handleInputValue, handleSubmitForm };
};
