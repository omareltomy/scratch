import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center absolute w-full h-[4rem] self-start px-10 shadow-lg ">
      <div className="relative w-[10rem] h-[5rem]">
        <Image
          src="/icons/logoFull.svg"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex justify-between w-[12rem] text-[1.3rem] items-center">
        <Link href="https://scratchpay.com/ " passHref>
          <a target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </Link>

        <Link href="https://scratchpay.com/team" passHref>
          <a target="_blank" rel="noopener noreferrer">
            About
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
