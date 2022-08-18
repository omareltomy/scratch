import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import FetchUsers from "./FetchUsers";
import UserCredentials from "./UserCredentials";
import UserRow from "./UserRow";
const UsersTable = () => {
  return (
    <div className=" bg-white  rounded-lg border w-[90%]  h-[85%] p-6 overflow-y-scroll scrollbar ">
      <UserCredentials />
      <FetchUsers />
    </div>
  );
};

export default UsersTable;
