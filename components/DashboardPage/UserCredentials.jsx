import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { addUser } from "./FetchUsers";
const liStyles = "w-[7rem] border-r-[1px] ";
const UserCredentials = () => {
  return (
    <div className="w-full py-2 bg-primary-midnight-50 text-white border-b-2 border-gray-300 rounded-lg">
      <ul className="w-full justify-evenly flex items-center">
        <li className={liStyles + "w-[2.8rem] "}>ID</li>
        <li className={liStyles}>First name</li>
        <li className={liStyles}>Last name</li>
        <li className={liStyles + "w-[10rem]"}>Email</li>
        <li className={liStyles}>Role</li>
        <li className={liStyles}>Status</li>
        <li>
          <AiOutlinePlusCircle
            size="1.5rem"
            color="white"
            className="cursor-pointer"
            onClick={(e) => {
              addUser(e);
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default UserCredentials;
