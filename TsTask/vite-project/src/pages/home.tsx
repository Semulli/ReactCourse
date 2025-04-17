import React, { useEffect, useState } from "react";
import UserTable from "../Components/userTable";
import { getUsers } from "../Api/fetchUsers";
import { user } from "../interfaces/home";

const Home: React.FC = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getUsers();
      setUsers(response.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const getRoleStyle = (
    role: "admin" | "moderator" | "user"
  ): React.CSSProperties => {
    switch (role) {
      case "admin":
        return { color: "red" };
      case "moderator":
        return { color: "blue" };
      case "user":
        return { color: "green" };
      default:
        return {};
    }
  };



  return (
    <div>
      <h1>User Table</h1>
      {loading && <p>Loading...</p>}

      <UserTable users={users} getRoleStyle={getRoleStyle} />
    </div>
  );
};

export default Home;
