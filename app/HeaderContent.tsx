import React from "react";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const HeaderContent = () => {
  return (
    <main className="md:flex justify-center items-center">
      <section
        className="h-[320px] flex flex-col md:flex-row justify-between
       items-center p-8 md:w-[90%] "
      >
        {/* name */}
        <div className="">
          <h1 className="text-[28px] lg:text-5xl ">Howdy , I'm </h1>
          <h1
            className="text-[29px] tracking-wider lg:text-[50px] "
            id="stroke"
          >
            Shriprasanna
          </h1>
          <h1 className="text-[18px] lg:text-2xl lg:-mt-4">
            Front End dev/ back <br className="lg:hidden" />
            end dev / UIUX / OPensource
          </h1>
        </div>

        {/* btn */}
        <div className="flex w-[340px] justify-between md:flex-col md:h-[160px]">
          <Link href="#">
            <button
              className="w-[155px] md:w-[165px] lg:w-[200px] border-2 border-black p-2 md:p-4 rounded-md 
            flex justify-around hover:text-white hover:border-white lg:text-xl tracking-wide"
            >
              Resume
              <MdOutlineDriveFolderUpload className="text-[26px] -mb-1 text-black lg:text-[28px]" />
            </button>
          </Link>

          <Link href="#">
            <button
              className="w-[155px] md:w-[165px] lg:w-[200px] border-2 border-black p-2 md:p-4 rounded-md 
              flex justify-around hover:text-white hover:border-white lg:text-xl tracking-wide"
            >
              hire me{" "}
              <FiSend className="text-[22px] mt-[2px] text-black lg:text-[28px]" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HeaderContent;
