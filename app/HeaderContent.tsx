import React from "react";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const HeaderContent = () => {
  return (
    <main className="md:flex justify-center items-center">
      <section
        className="h-[320px] flex flex-col md:flex-row justify-between
       items-center p-8 md:w-[90%]"
      >
        {/* name */}
        <div className="">
          <h1 className="text-[28px] md:text-5xl ">Howdy , I'm </h1>
          <h1
            className="text-[29px] tracking-wider md:text-[55px] "
            id="stroke"
          >
            Shriprasanna
          </h1>
          <h1 className="text-[18px] md:text-2xl md:-mt-4">
            Front End dev/ back <br className="md:hidden" />
            end dev / UIUX / OPensource
          </h1>
        </div>

        {/* btn */}
        <div className="flex w-[340px] justify-between md:flex-col h-[160px]">
          <Link href="#">
            <button
              className="w-[155px] md:w-[200px] border-2 border-black p-2 md:p-4 rounded-md 
            flex justify-around hover:text-white hover:border-white md:text-xl tracking-wide"
            >
              Resume
              <MdOutlineDriveFolderUpload className="text-[26px] -mb-1 text-black md:text-[28px]" />
            </button>
          </Link>

          <Link href="#">
            <button
              className="w-[155px] md:w-[200px] border-2 border-black p-2 md:p-4 rounded-md 
              flex justify-around hover:text-white hover:border-white md:text-xl tracking-wide"
            >
              hire me{" "}
              <FiSend className="text-[22px] mt-[2px] text-black md:text-[28px]" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HeaderContent;
