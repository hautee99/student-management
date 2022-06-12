import React, { useEffect, useState } from "react";
import FormSubmit from "../Form/FormSubmit";
import FormUpdate from "../Form/FormUpdate";
const InputHookForm = ({
  handleSubmit,
  onSubmit,
  onUpdate,
  register,
  errors,
  isSubmitting,
  value,
  type,
  typeModal,
  handleUpdateValue,
}) => {
  return (
    <div>
      {typeModal === "submit" ? (
        <FormSubmit
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
          value={value}
          errors={errors}
          isSubmitting={isSubmitting}
          type={type}
        ></FormSubmit>
      ) : (
        <FormUpdate
          handleUpdateValue={handleUpdateValue}
          handleSubmit={handleSubmit}
          onUpdate={onUpdate}
          register={register}
          value={value}
          errors={errors}
          isSubmitting={isSubmitting}
          type={type}
        ></FormUpdate>
      )}
    </div>
  );
};

export default InputHookForm;
