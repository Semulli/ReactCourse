import React, { use } from "react";
import { UserDetail } from "../../../interfaces/home";

type UserDetailProps = {
  userDetail: UserDetail | null;
};

const UserDetailCard: React.FC<UserDetailProps> = ({ userDetail }) => {
  console.log(userDetail);

  return (
    <div>
      <ul>
        <li>{userDetail?.id}</li>
        <li>{userDetail?.firstName}</li>
        <li>{userDetail?.lastName}</li>
        <li>{userDetail?.age}</li>
        <li>{userDetail?.address?.city}</li>
        <li>{userDetail?.phone}</li>
        <li>{userDetail?.weight}</li>
        <li>{userDetail?.company?.name}</li>
      </ul>
    </div>
  );
};

export default UserDetailCard;
