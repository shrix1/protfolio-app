import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="border-2 h-[400px] w-[100%] rounded-md bg-[rgba(255,255,255,0.06)] lg:w-[430px]">
      <h1 className="p-3 text-xl text-white tracking-widest">About</h1>

      <div className=" h-[340px] flex p-4 justify-between ">
        <h1 className="text-xl font-sp text-white w-[150px] lg:w-[200px] lg:text-2xl lg:-mt-[20px]  ">
          After watching some film i felt love in Programming and started
          improving My Coding Skills & Developing / designing web application.{" "}
        </h1>

        <Image
          src="/photo.png"
          alt="sasa"
          width={160}
          height={200}
          className="rounded-md -mt-[20px] lg:w-[200px]"
          priority
        />
      </div>
    </div>
  );
};

export default About;
