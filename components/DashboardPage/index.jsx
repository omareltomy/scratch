import { signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { auth } from "../../src/firebaseConfig";
import UsersTable from "./UsersTable";

const DashboardPage = () => {
  return (
    <div className="w-full h-screen flex  ">
      {/* -------- side nav beginning*/}
      <div className="hidden md:flex  w-[20%] h-screen bg-primary-midnight-100  flex-col items-center justify-between rounded-r-2xl">
        <div>
          <h1 className="text-white text-3xl font-[heroNewBold] mt-5">
            Dashboard
          </h1>
          <div className="w-[30%] h-[3px] bg-white rounded-full mx-auto"></div>
        </div>
        <div className="bg-primary-midnight-50 hover:bg-[#3752ff] transition-[1s] text-white w-full text-3xl py-5 pl-2 outline outline-offset-4 cursor-pointer">
          <h1>Users</h1>
        </div>
        <div className="text-center text-gray-100 text-[0.8rem] pb-2">
          <Image src="/icons/logo.svg" alt="logo" width="100" height="100" />
          <p>Scratch Financial, Inc 2022</p>
        </div>
      </div>
      {/* -------- side nav end */}
      <div className="w-full md:w-[80%] flex flex-col items-center justify-between ">
        {/* -------- top nav beginning*/}
        <div className="flex items-center justify-between w-full px-[10%] h-[4rem] shadow-md">
          <div className="w-[12rem] h-[5rem] relative">
            <Image
              src="/icons/logoFull.svg"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* -------- top nav end */}
          <div className="flex items-center">
            <h1 className="text-[1rem] mx-3 ">{auth.currentUser?.email}</h1>
            <AiOutlineLogout
              size="2.5rem"
              color="var(--primary-midnight-50)"
              style={{ cursor: "pointer" }}
              onClick={() => {
                signOut(auth);
              }}
            />
          </div>
        </div>
        <UsersTable />
      </div>
    </div>
  );
};

export default DashboardPage;
