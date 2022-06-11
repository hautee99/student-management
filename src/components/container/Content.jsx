import React from "react";
import { useModalClose } from "../hooks/useModalClose";
import Button from "../modal/Button";
import Modal from "../modal/Modal";
const Content = ({
  studentList,
  onClickModal,
  handleDeleteStudent,
  handleUpdateStudent,
}) => {
  const { modal, handleModalClose } = useModalClose();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FULLNAME</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullName}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <div className="flex">
                  <Button
                    className="bg-red-500"
                    onClick={() => handleDeleteStudent(item.id)}
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Button>
                  <Button onClick={handleModalClose} className="bg-blue-500">
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={modal} onClick={handleModalClose}></Modal>
    </div>
  );
};

export default Content;
