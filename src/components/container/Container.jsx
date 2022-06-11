import React, { useState } from "react";
import { useModalClose } from "../hooks/useModalClose";
import Modal from "../modal/Modal";
import Content from "./Content";
import Header from "./Header";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";
const Container = () => {
  const { modal, handleModalClose } = useModalClose();
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      fullName: "Nguyễn Văn Thành",
      address: "Nam Định",
      phone: "0898279836",
      email: "haute123456@gmail.com",
    },
    {
      id: 2,
      fullName: "Phạm Trung Kiên",
      address: "Hà Nội",
      phone: "0918509286",
      email: "haute123456@gmail.com",
    },
    {
      id: 3,
      fullName: "Phan Tấn Khang",
      address: "Bắc Ninh",
      phone: "0613509235",
      email: "haute123456@gmail.com",
    },
    {
      id: 4,
      fullName: "Nguyễn Thành Long",
      address: "Ninh Bình",
      phone: "0923904091",
      email: "haute123456@gmail.com",
    },
    {
      id: 5,
      fullName: "Lê Tuấn Tú",
      address: "Hải Dương",
      phone: "0932959000",
      email: "haute123456@gmail.com",
    },
  ]);
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
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newstudentArr = [...studentList].filter((item) => item.id !== id);
        setStudentList(newstudentArr);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleUpdateStudent = (id) => {
    handleModalClose(modal);
    // setStudentList((prev) =>
    //   prev.map((item) => (item.id === id ? "update" : item))
    // );
  };
  return (
    <div className="w-full h-full bg-blue-100">
      <Header handleSubmitValue={handleSubmitValue}></Header>
      <Content
        studentList={studentList}
        onClickModal={handleModalClose}
        handleDeleteStudent={handleDeleteStudent}
        handleUpdateStudent={handleUpdateStudent}
      ></Content>
      <Modal open={modal} onSubmitValue={handleSubmitValue}></Modal>
    </div>
  );
};

export default Container;
