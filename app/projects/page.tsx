import Link from "next/link";
import React from "react";
import { BsBackspace } from "react-icons/bs";

const page = () => {
  return (
    <div className="bg-[#585757] w-full h-full md:h-screen">
      <h1 className="text-white text-4xl pt-6 tracking-wider text-center ">
        Projects
      </h1>

      <Link
        href="/"
        title="go back"
        className="flex justify-center items-center"
      >
        {/* <BsBackspace className="text-3xl" />{" "} */}
        <button
          className="text-[16px] font-pop border p-1 text-center w-[100px] rounded-md
        border-black hover:text-white"
        >
          Go back
        </button>
      </Link>

      <div className="md:flex justify-center items-center">
        <div
          className="flex justify-center items-center flex-col mt-[30px] text-white gap-[10px]
      md:flex-row md:flex-wrap md:w-[70%]"
        >
          {/* one */}
          <div className="border-2 w-[340px] h-[180px] rounded-md border-black">
            <h1 className="p-3 tracking-wider underline">Shopping cart</h1>
            <p className="text-center font-pop p-2">
              E-commerce based working Site <br /> TECHSTACK :{" "}
              <b className="tracking-wide">ReactTS</b>
            </p>

            <div className="flex justify-around items-center p-2">
              <Link
                href="https://github.com/shrix1/React_JS-Shopping-cart"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                github
              </Link>
              <Link
                href="https://react-js-shopping-cart-shrix1.vercel.app/"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                Live
              </Link>
            </div>
          </div>

          {/* 2 */}
          <div className="border-2 w-[340px] h-[200px] rounded-md border-black">
            <h1 className="p-3 tracking-wider underline">vs code theme app</h1>
            <p className="text-center font-pop p-2">
              Builded a VScode application with live site with 170+ downloads
              <br /> TECHSTACK :{" "}
              <b className="tracking-wide">ReactJS Firebase</b>
            </p>

            <div className="flex justify-around items-center p-2">
              <Link
                href="https://github.com/shrix1/VS_code-ThemeApp"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                github
              </Link>
              <Link
                href="https://miniproject-shrix1.vercel.app/"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                Live
              </Link>
            </div>
          </div>

          {/* 3 */}
          <div className="border-2 w-[340px] h-[180px] rounded-md border-black">
            <h1 className="p-3 tracking-wider underline">Source of visuals</h1>
            <p className="text-center font-pop p-2">
              Pixel / Unsplash inspired Site (api used) <br /> TECHSTACK :{" "}
              <b className="tracking-wide">HTML CSS JS</b>
            </p>

            <div className="flex justify-around items-center p-2">
              <Link
                href="https://github.com/shrix1/VanaillaJS-Wallpaper-site"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                github
              </Link>
              <Link
                href="https://wallpaper-api-shrix1.vercel.app/"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                Live
              </Link>
            </div>
          </div>

          {/* 4 */}
          <div className="border-2 w-[340px] h-[200px] rounded-md border-black">
            <h1 className="p-3 tracking-wider underline text-[14px]">
              OPensource contribution
            </h1>
            <p className="text-center font-pop p-2">
              Build this website for Anna university students <br /> TECHSTACK :{" "}
              <b className="tracking-wide">ReactJS Firebase</b>
            </p>

            <div className="flex justify-around items-center p-2">
              <Link
                href="https://github.com/shrix1/OpenSource-project-for-HACKTOBERFEST-"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                github
              </Link>
              <Link
                href="https://aucruncher.vercel.app/"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                Live
              </Link>
            </div>
          </div>

          {/* 5 */}
          <div className="border-2 w-[340px] h-[200px] rounded-md border-black">
            <h1 className="p-3 tracking-wider underline ">CURD application</h1>
            <p className="text-center font-pop p-2">
              Made this curd app with add,del,done feature <br /> TECHSTACK :{" "}
              <b className="tracking-wide">ReactTS</b>
            </p>

            <div className="flex justify-around items-center p-2">
              <Link
                href="https://github.com/shrix1/React_TS-TodoList"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                github
              </Link>
              <Link
                href="https://react-ts-todo-list-shrix1.vercel.app/"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                Live
              </Link>
            </div>
          </div>

          {/* 6 */}
          <div className="border-2 w-[340px] h-[200px] rounded-md border-black">
            <h1 className="p-3 tracking-wider underline ">
              Paint app using Canvas
            </h1>
            <p className="text-center font-pop p-2">
              paint app with more feature <br /> TECHSTACK :{" "}
              <b className="tracking-wide">HTML CSS JS</b>
            </p>

            <div className="flex justify-around items-center p-2">
              <Link
                href="https://github.com/shrix1/paint-js"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                github
              </Link>
              <Link
                href="https://shripaint-js.netlify.app/"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                Live
              </Link>
            </div>
          </div>

          {/* 7 */}
          <div className="border-2 w-[340px] h-[200px] rounded-md border-black">
            <h1 className="p-3 tracking-wider underline ">
              IBM data analytics website
            </h1>
            <p className="text-center font-pop p-2">
              Data analytics project overall subcase <br /> TECHSTACK :{" "}
              <b className="tracking-wide">NEXT JS</b>
            </p>

            <div className="flex justify-around items-center p-2">
              <Link
                href="https://github.com/shrix1/IBM-webpage"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                github
              </Link>
              <Link
                href="https://ibm-webpage-shrix1.vercel.app/"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                Live
              </Link>
            </div>
          </div>

          {/* 8 */}
          <div className="border-2 w-[340px] h-[200px] rounded-md border-black">
            <h1 className="p-3 tracking-wider underline ">Drumkit site</h1>
            <p className="text-center font-pop p-2">
              Drumkit app using vanilla JS <br /> TECHSTACK :{" "}
              <b className="tracking-wide">HTML CSS JS</b>
            </p>

            <div className="flex justify-around items-center p-2">
              <Link
                href="https://github.com/shrix1/VanillaJs-DrumKit"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                github
              </Link>
              <Link
                href="https://drum-kit-shrix1.vercel.app/"
                className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider"
              >
                Live
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[40px] flex justify-center items-center flex-col gap-2 text-white pt-[40px]">
        <h1 className="font-pop">For more project check out github repo</h1>
        <Link
          href="https://github.com/shrix1"
          className=" border p-[6px] rounded-md text-[15px] hover:text-black tracking-wider "
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default page;
