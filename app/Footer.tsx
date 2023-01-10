import Link from "next/link";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="w-full h-[140px] flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-[200px] lg:h-[60px]"
      id="grad"
    >
      <h1 className="text-[16px]">Connect with me over socials</h1>
      <a href="mailto:shriprasanna32@gmail.com">
        <div className="font-pop font-semibold flex gap-2" id="contact">
          <BiMailSend className="text-3xl -mt-1" />
          <h1>shriprasanna32@gmail.com</h1>
        </div>
      </a>

      <a href="tel:+917904028913">
        <div className="font-pop font-semibold flex gap-2">
          <AiTwotonePhone className="text-2xl" />
          <h1 className="">+91 7904028913</h1>{" "}
        </div>
      </a>
    </div>
  );
};

export default Footer;
