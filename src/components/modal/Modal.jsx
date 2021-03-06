import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputHookForm from "../input/InputHookForm";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Modal = ({
  className,
  open = false,
  onClick = () => {},
  onSubmitValue = () => {},
  handleUpdateStudent = () => {},
  type,
  typeModal,
}) => {
  const [value, setValue] = useState();
  const handleResetInput = () => {
    setValue("");
  };
  const schemaValidation = yup.object({
    id: yup.string().required("Please enter ID").max(2),
    fullName: yup.string().required("Please enter fullname").max(20),
    address: yup.string().required("Please enter address").max(20),
    phone: yup.string().required("Please enter phone").max(11),
    email: yup.string().required("Please enter email").max(20),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(schemaValidation) });
  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        // console.log(data.image[0].name);
        onSubmitValue(data);
        handleResetInput();
        toast("Create student succesfully");
      }, 2000);
    });
  };
  const onUpdate = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        handleUpdateStudent(data);
        // toast("Update student succesfully");
      }, 2000);
    });
  };

  if (typeof document === "undefined") return <div className="modal"></div>;

  return ReactDOM.createPortal(
    <div
      className={`modal fixed flex justify-center items-center p-5 inset-0 z-50 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="overlay absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="modal-content px-5 bg-white w-[420px] h-auto z-10 relative rounded-lg">
        <span
          onClick={onClick}
          className="absolute bg-white top-0 right-0 cursor-pointer flex justify-center items-center w-10 h-10 rounded-full -translate-y-2/4 translate-x-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className="h-auto">
          {typeModal === "submit" ? (
            <InputHookForm
              isSubmitting={isSubmitting}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              value={value}
              type={type}
              typeModal={typeModal}
            ></InputHookForm>
          ) : (
            <InputHookForm
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
              onUpdate={onUpdate}
              errors={errors}
              typeModal={typeModal}
              register={register}
              value={value}
              type={type}
            ></InputHookForm>
          )}
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
