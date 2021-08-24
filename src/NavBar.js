import Hamburger from "hamburger-react";
import { useState } from "react";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <nav className="gap-12 absolute bg-accusoft-black p-6 h-44 sm:hidden w-6/12 justify-start top-0 right-0 text-xl border-l-2 border-b-2 border-accusoft-white text-accusoft-white">
          <ul>
            <li className="mt-8 hover:text-accusoft-purple">Services</li>
            <li className="mt-2 hover:text-accusoft-purple">About</li>
            <li className="mt-2 hover:text-accusoft-purple">Contact</li>
          </ul>
        </nav>
      )}
      <div className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
          <img src="./imgs/logo.svg" width="250" height="250" alt="logo" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-accusoft-yellow uppercase text-sm">
          <li className="group">
            {" "}
            <a
              className="group-hover:text-accusoft-purple border-2 border-dashed border-accusoft-purple border-opacity-0 hover:border-opacity-100 flex text-left"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            {" "}
            <a
              className="hover:text-accusoft-purple border-2 border-dashed border-accusoft-purple border-opacity-0 hover:border-opacity-100"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-accusoft-purple border-2 border-dashed border-accusoft-purple border-opacity-0 hover:border-opacity-100"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="absolute px-6 py-4 sm:hidden top-0 right-0">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
