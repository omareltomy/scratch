import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { auth } from "../../src/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Navbar from "./Navbar";

const FormPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      {
        /* -------- it will create an account with an email and password if you haven't signed up before --------*/
      }
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          try {
            await signInWithEmailAndPassword(auth, email, password);
            {
              /* -------- It will sign you in if the password is correct */
            }
          } catch (error) {
            console.log(error.code);
            if (error.code == "auth/wrong-password") {
              setWrongPassword(true);
            }
            {
              /* -------- it will not let you in showing a red message saying wrong password -------- */
            }
          }
        case "auth/weak-password":
          setWeakPassword(true);
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex flex-col items-center justify-around py-[6rem]">
        <div>
          <h1 className=" text-5xl font-[heroNewBold]">Welcome Back !</h1>
          <div className="w-[50%] h-[5px] bg-primary-midnight-50 rounded-full my-2 mx-auto"></div>
        </div>

        <div className="h-[20rem] lg:h-[80%] w-[60vw]  shadow-xl my-5 flex ">
          <div className="h-full w-[25%] bg-primary-midnight-50 flex items-center justify-center rounded-l-xl">
            <div className="relative w-[90%] h-[50%] ">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <form
            onSubmit={submitHandler}
            className="h-[80%] w-[75%] my-auto flex flex-col items-center justify-around "
          >
            <div className="relative w-[80%] ">
              <div className="flex absolute inset-y-0  items-center px-2 pointer-events-none bg-primary-midnight-50">
                <FiMail size="1.8rem" color="white" />
              </div>
              <input
                placeholder="Please enter your Email "
                type="email"
                required
                className="w-full h-[3rem] bg-white outline outline-[2px] outline-primary-midnight-50 rounded-r-full pl-[4rem] focus:border-2"
              />
            </div>
            <div className="relative w-[80%] ">
              <div className="flex absolute inset-y-0 right-2 items-center pl-3">
                {passwordVisible ? (
                  <FiEyeOff
                    size="1.8rem"
                    color="var(--primary-midnight-50)"
                    cursor="pointer"
                    onClick={() => {
                      setPasswordVisible(false);
                    }}
                  />
                ) : (
                  <FiEye
                    size="1.8rem"
                    color="var(--primary-midnight-50)"
                    cursor="pointer"
                    onClick={() => {
                      setPasswordVisible(true);
                    }}
                  />
                )}
              </div>
              <div className="flex absolute inset-y-0  items-center px-2 pointer-events-none bg-primary-midnight-50">
                <FiLock size="1.8rem" color="white" />
              </div>
              <input
                placeholder="Please enter your password"
                type={passwordVisible ? "text" : "password"}
                required
                className="w-full h-[3rem] bg-white outline outline-[2px] outline-primary-midnight-50 rounded-r-full pl-[4rem] focus:border-2"
              />
            </div>
            <p
              className={`self-start ml-[10%] text-gray-500 text-[0.8rem] ${
                wrongPassword || weakPassword ? "text-red-500" : ""
              }`}
            >
              {!wrongPassword ? "6 characters at least" : "wrong password"}
            </p>

            <div className="flex w-full items-center justify-around ">
              <div>
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  defaultChecked
                />

                <label className="ml-2 ">Keep me signed in</label>
              </div>
              <button className="bg-primary-midnight-50 hover:bg-[#3d57ff]  px-10 py-2 text-2xl rounded-full text-white transition-[1s]">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPage;
