import React, { useState } from "react";
import Button from "../../modal/Button";
import Table from "./Table";

const UserTable = ({ students, onClick }) => {
  const [studentArr, setStudentsArr] = useState(students);
  const handleDeleteStudent = (id) => {
    const newstudentArr = [...studentArr].filter((item) => item.id !== id);
    setStudentsArr(newstudentArr);
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentArr.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <div className="flex justify-center items-center">
                  <Button
                    className="bg-red-500"
                    onClick={() => handleDeleteStudent(item.id)}
                  >
                    Xóa
                  </Button>
                  <Button onClick={onClick} className="bg-blue-500">
                    Sửa
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
