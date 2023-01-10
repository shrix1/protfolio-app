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
      justify-center items-center flex-col cursor-pointer hover:text-black"
      >
        <Link href="/projects">
          <h1 className="text-[20px] text-center">All Projects</h1>
          <h1 className="text-[20px] text-center"> - more -</h1>{" "}
        </Link>
      </div>

      {/* Links */}
      <div
        className="border-2 w-[45%] h-[150px] rounded-md flex justify-center items-center flex-wrap
        text-4xl p-3 gap-[40px]"
      >
        <Link href="https://twitter.com/shriprasanna007">
          <AiOutlineTwitter className="text-[#3d97e0] text-5xl" />
        </Link>
        <Link href="https://github.com/shrix1">
          <BsGithub className=" text-[#000000]" />
        </Link>
        <Link href="https://leetcode.com/problemset/all/">
          <SiLeetcode className=" text-[#cfe64f]" />
        </Link>
        <Link href="https://www.linkedin.com/in/shrix1/">
          <BsLinkedin className=" text-[#006fca]" />
        </Link>
      </div>
    </div>
  );
};

export default Others;
