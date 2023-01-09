import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";

const Nav = () => {
  const [btn, setBtn] = useState(true);

  const openMenu = () => {
    const menu: HTMLElement | any = document.getElementById("menu");
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    setBtn(false);
  };

  const closeMenu = () => {
    const menu: HTMLElement | any = document.getElementById("menu");
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    setBtn(true);
  };
  return (
    <>
      <nav className="flex p-3 flex-col md:flex-row md:justify-around pt-[16px]">
        <div className="flex justify-around">
          <a href="#" className="text-2xl pt-1 hover:text-white">
            SHRI
          </a>

          <div className="md:hidden cursor-pointer text-[27px] font-semibold">
            {btn ? (
              <IoMdMenu
                className="mt-1 rounded-md w-[30px] h-[30px] hover:bg-[#ffffff7b] 
                 "
                onClick={openMenu}
              />
            ) : (
              <GrFormClose
                className="mt-1 rounded-md w-[30px] h-[30px] hover:bg-[#ffffff7b] "
                onClick={closeMenu}
              />
            )}
          </div>
        </div>

        <div
          className="md:flex justify-around hidden p-2 md:gap-[100px] transition-all 
          duration-300 ease-out delay-75 bg-[#ffffff7b] rounded-md md:bg-transparent"
          id="menu"
        >
          <a href="#" className="hover:text-white">
            Projects
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;