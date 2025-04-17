import React from "react";
import { userTableProps } from "../../interfaces/home";
import { useNavigate } from "react-router";
import { ROUTER } from "../../constants/Router";

const UserTable: React.FC<userTableProps> = ({ users, getRoleStyle }) => {
  const navigate = useNavigate();



  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Role</th>
          <th>Buttons</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{`${user.age} years old`}</td>
            <td style={getRoleStyle(user.role)}>{user.role}</td>
            <button onClick={() => navigate(`${ROUTER.detail}/${user.id}`)}>
              see details
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
