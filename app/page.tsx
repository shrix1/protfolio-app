"use client";
import Nav from "./Nav";
import HeaderContent from "./HeaderContent";
import About from "./About";
import Education from "./Education";
import Techstack from "./Techstack";
import Other from "./Others";
import Footer from "./Footer";
// import React, { useState, useEffect } from "react";
// import RingLoader from "react-spinners/RingLoader";

export default function Home() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 800);
  // }, []);

  return (
    <>
      <main className="bg-[#2F2F2F] w-full h-full p-3">
        {/* header */}
        <section className=" h-[400px] rounded-md" id="grad">
          {/* navBar */}
          <Nav />
          {/* headerContent */}
          <HeaderContent />
        </section>

        {/* Main content */}
        <section className="flex flex-col justify-center items-center mt-4 gap-[13px] md:gap-2">
          {/* about  and others*/}
          <div className="flex gap-4 justify-center items-center lg:flex-row flex-col">
            <About />
            <Education />
            <Techstack />
          </div>

          <Other />
        </section>

        {/* footer */}
      </main>
      <Footer />
    </>
  );
}
