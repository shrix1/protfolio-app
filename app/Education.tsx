import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <div className="border-2 h-[380px] w-[100%] rounded-md lg:w-[430px] text-white">
      <h1 className="p-3 text-xl text-white tracking-widest">Education</h1>

      <div className="flex">
        <Image
          src="/education.png"
          alt="sasa"
          width={20}
          height={10}
          className="h-[190px] mt-5 ml-2"
          priority
        />
        <section className="p-3 flex justify-between flex-col h-[270px]">
          {/* college */}
          <div>
            <h1 className="text-xl tracking-wide">B.e Computer science Engg</h1>
            <h1 className="font-pop text-[#ffffff7c] capitalize">
              global institute of engg and Technology affi Anna University{" "}
            </h1>
            <div className="flex justify-between font-sp ">
              <h1>2019-2023 </h1>
              <h1>8.4/10 CGPA</h1>
            </div>
          </div>

          {/* school */}
          <div>
            <h1 className="text-xl tracking-wide">Matriculation</h1>
            <h1 className="font-pop text-[#ffffff7c] capitalize">
              Shanthinikethan Matric Higher Secondary School
            </h1>
            <div className="flex justify-between font-sp">
              <h1>2018-2019 </h1>
              <h1> 75 %</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
