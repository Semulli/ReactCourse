import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { getUsersById } from "../Api/fetchUsers";

import UserDetailCard from "../Components/userTable/UserDetailCard";
import { UserDetail } from "../interfaces/home";

function Detail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState<UserDetail | null>(null);

  const fetchUsersById = async () => {
    try {
      setLoading(true);
      const response = await getUsersById(Number(id));
      setUserDetails(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUsersById();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(userDetails);
  
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <UserDetailCard userDetail={userDetails} />

    </div>
  );
}

export default Detail;
