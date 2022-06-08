import React, { useState } from "react";
// import { ReactDOM } from "react";
import ReactDOM from "react-dom";
import { useHandleSubmit } from "../hooks/useHandleSubmit";
import Input from "../input/Input";
import Label from "../label/Label";
import Button from "./Button";

const Modal = ({
  className,
  open = false,
  onClick = () => {},
  onChange = () => {},
}) => {
  const { values, handleSubmitForm } = useHandleSubmit();
  if (typeof document === "undefined") return <div className="modal"></div>;

  return ReactDOM.createPortal(
    <div
      className={`modal fixed flex justify-center items-center p-5 inset-0 z-50 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="overlay absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="modal-content p-10 bg-white w-[420px] h-[650px] z-10 relative">
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
        <div>
          <h1 className="text-xl font-bold text-center">STUDENT</h1>
          <form action="" onSubmit={handleSubmitForm}>
            <Label text="ID"></Label>
            <Input onChange={onChange} name="id"></Input>
            <Label text="UserName"></Label>
            <Input onChange={onChange} name="fullname"></Input>
            <Label text="Adrress"></Label>
            <Input onChange={onChange} name="address"></Input>
            <Label text="Phone"></Label>
            <Input onChange={onChange} name="phone" type="phone"></Input>
            <Label text="Email"></Label>
            <Input onChange={onChange} name="email" type="email"></Input>
            <div className="flex justify-center items-center">
              <Button className="bg-blue-500 mt-5 " type="submit">
                Thêm
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
  // <div
  //   className={`w-[500px] h-[500px] bg-slate-500 sha inset-1/2 translate-x-[-50%] translate-y-[-50%] ${className} rounded-md shadow-xl`}
  // >
  //   <p>
  //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
  //     molestiae aspernatur inventore tempore consequuntur aliquid dolorum
  //     porro! Sequi eius quae fugiat totam rerum, eaque, modi eos est tempore
  //     laborum hic!
  //   </p>
  // </div>
};

export default Modal;
