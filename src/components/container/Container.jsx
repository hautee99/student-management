import React, { useEffect, useRef, useState } from "react";
import { useModalClose } from "../hooks/useModalClose";
import Modal from "../modal/Modal";
import Content from "./Content";
import Header from "./Header";
import Swal from "sweetalert2";
import { v4 as id } from "uuid";
import { Data } from "../data/Data";
// import "sweetalert2/src/sweetalert2.scss";
const Container = () => {
  const { dataStudents } = Data();
  const { modal, handleModalClose } = useModalClose();
  const [studentId, setStudentId] = useState();
  const typingTimeoutRef = useRef(null);
  const [studentList, setStudentList] = useState(dataStudents);
  const handleSubmitValue = (data) => {
    const newStudentList = [...studentList, data];
    setStudentList(newStudentList);
  };
  const handleDeleteStudent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deleted it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newstudentArr = [...studentList].filter((item) => item.id !== id);
        setStudentList(newstudentArr);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleClickStudentID = (id) => {
    handleModalClose(modal);
    setStudentId(id);
  };

  const handleUpdateStudent = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setStudentList((prev) =>
          prev.map((item) => (item.id === studentId ? data : item))
        );
        Swal.fire("Updated!", "Your file has been updated.", "success");
        handleModalClose(modal);
      } else if (!result.isConfirmed) {
        handleModalClose(modal);
      }
    });
  };
  const handleChangeString = (str) => {
    let strValue = "";
    strValue = str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
    return strValue;
  };

  const handleSearchStudent = (value) => {
    const strValue = handleChangeString(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      if (value === "") {
        setStudentList(dataStudents);
      } else {
        const searchStudent = [...studentList].filter((item) =>
          handleChangeString(item.fullName).includes(strValue.toLowerCase())
        );
        setStudentList(searchStudent);
      }
    }, 300);
  };

  return (
    <div className="w-full h-full bg-blue-100">
      <Header
        handleSubmitValue={handleSubmitValue}
        handleInputValue={handleSearchStudent}
      ></Header>
      <Content
        studentList={studentList}
        // onClickModal={handleModalClose}
        handleDeleteStudent={handleDeleteStudent}
        handleClickStudentID={handleClickStudentID}
        handleUpdateStudent={handleUpdateStudent}
      ></Content>
      <Modal
        open={modal}
        onClick={handleModalClose}
        onSubmitValue={handleSubmitValue}
        handleUpdateStudent={handleUpdateStudent}
      ></Modal>
    </div>
  );
};

export default Container;
