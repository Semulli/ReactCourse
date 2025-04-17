import React from "react";
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
        <li>address</li>
        <li>phone</li>
        <li>website</li>
        <li>company</li>
      </ul>
    </div>
  );
};

export default UserDetailCard;
