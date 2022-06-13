import React, { useEffect, useRef, useState } from "react";
import { useModalClose } from "../hooks/useModalClose";
import Modal from "../modal/Modal";
import Content from "./Content";
import Header from "./Header";
import Swal from "sweetalert2";
import { v4 as id } from "uuid";
// import "sweetalert2/src/sweetalert2.scss";
const Container = () => {
  const { modal, handleModalClose } = useModalClose();
  const [studentId, setStudentId] = useState();
  const typingTimeoutRef = useRef(null);
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      fullName: "Nguyễn Văn Thành",
      address: "Nam Định",
      phone: "0898279836",
      email: "haute123456@gmail.com",
    },
    {
      id: 2,
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      fullName: "Phạm Trung Kiên",
      address: "Hà Nội",
      phone: "0918509286",
      email: "haute123456@gmail.com",
    },
    {
      id: 3,
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      fullName: "Phan Tấn Khang",
      address: "Bắc Ninh",
      phone: "0613509235",
      email: "haute123456@gmail.com",
    },
    {
      id: 4,
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      fullName: "Nguyễn Thành Long",
      address: "Ninh Bình",
      phone: "0923904091",
      email: "haute123456@gmail.com",
    },
    {
      id: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      fullName: "Lê Tuấn Tú",
      address: "Hải Dương",
      phone: "0932959000",
      email: "haute123456@gmail.com",
    },
  ]);
  const handleSubmitValue = (data) => {
    console.log(data);
    console.log(data.image[0].name);
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
    console.log(studentList);
    const strValue = handleChangeString(value);
    // setInput(strValue);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      if (value === "") {
        setStudentList([
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
