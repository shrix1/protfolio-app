import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Others = () => {
  return (
    <div
      className="h-[190px] w-[100%] rounded-md text-white lg:h-[160px]
    flex justify-between items-center lg:w-[900px]"
    >
      <div
        className="border-2 w-[45%] h-[150px] rounded-md flex 
      justify-center items-center flex-col"
      >
        <h1 className="text-[20px] text-center">All Projects</h1>
        <h1 className="text-[20px] text-center"> - more -</h1>
      </div>

      {/* Links */}
      <div
        className="border-2 w-[45%] h-[150px] rounded-md flex justify-center items-center flex-wrap
        text-4xl p-3 gap-[40px]"
      >
        <Link href="">
          <AiOutlineTwitter className="text-[#3d97e0] text-5xl" />
        </Link>
        <Link href="">
          <BsGithub className=" text-[#000000]" />
        </Link>
        <Link href="">
          <SiLeetcode className=" text-[#cfe64f]" />
        </Link>
        <Link href="">
          <BsLinkedin className=" text-[#006fca]" />
        </Link>
      </div>
    </div>
  );
};

export default Others;
