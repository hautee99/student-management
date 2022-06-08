import React, { useState } from "react";
import { useHandleInput } from "./useHandleInput";

export const useHandleSubmit = () => {
  const { values, handleInputValue } = useHandleInput();
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(values && values);
  };
  return { values, handleSubmitForm };
};
