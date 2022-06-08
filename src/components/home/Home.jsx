import React from "react";
import BodyContainer from "../container/BodyContainer";
import HeadContainer from "../container/HeadContainer";
import Modal from "../modal/Modal";

const Home = () => {
  const studentList = [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      address: "Nam Định",
      phone: "0123456789",
      email: "haute123456@gmail.com",
    },
    {
      id: 2,
      userName: "Nguyễn Văn B",
      address: "Nam Định",
      phone: "0123456789",
      email: "haute123456@gmail.com",
    },
    {
      id: 3,
      userName: "Nguyễn Văn C",
      address: "Nam Định",
      phone: "0123456789",
      email: "haute123456@gmail.com",
    },
    {
      id: 4,
      userName: "Nguyễn Văn D",
      address: "Nam Định",
      phone: "0123456789",
      email: "haute123456@gmail.com",
    },
    {
      id: 5,
      userName: "Nguyễn Văn E",
      address: "Nam Định",
      phone: "0123456789",
      email: "haute123456@gmail.com",
    },
  ];

  return (
    <div className=" bg-gray-300 w-full h-full relative ">
      <HeadContainer></HeadContainer>
      <BodyContainer studentList={studentList}></BodyContainer>
      {/* <Modal className="absolute"></Modal> */}
    </div>
  );
};

export default Home;
