import Link from "next/link";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="w-full h-[140px] flex flex-col justify-center items-center gap-3"
      id="grad"
    >
      <h1 className="text-[16px]">Connect with me over socials</h1>
      <Link href="/">
        <div className="font-pop font-semibold flex gap-2">
          <BiMailSend className="text-3xl -mt-1" />
          <h1>shriprasanna32@gmail.com</h1>
        </div>
      </Link>
      <Link href="/">
        <div className="font-pop font-semibold flex gap-2">
          <AiTwotonePhone className="text-2xl" />
          <h1 className="">+91 7904028913</h1>{" "}
        </div>
      </Link>
    </div>
  );
};

export default Footer;
