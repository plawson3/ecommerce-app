"use client";

import Link from "next/link";
import { useState } from "react";
import { BsMoonStarsFill, BsFillCartFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";



export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <nav>
      <div className="flex justify-between py-5 text-xl font-mono font-bold items-center  border-b-2">
        <h1>My-Ecommerce-Web</h1>
        <div className="space-x-5 text-lg ">
          <Link href={"/"} className="hover:text-zinc-400 easeInOutEffect ">
            Home
          </Link>
          <Link href={"/"} className="hover:text-zinc-400 easeInOutEffect">
            Products
          </Link>
        </div>
        <div className="space-x-5">
          <button
            className={`buttonColor easeInOutEffect`}
            onClick={() => {
                setIsDarkMode(!isDarkMode);
            }}
          >
            {isDarkMode !== false ? (
              <MdWbSunny className="iconEffect easeInOutEffect " />
            ) : (
              <BsMoonStarsFill className=" iconEffect easeInOutEffect " />
            )}
          </button>
          <button className="buttonColor easeInOutEffect">
            <BsFillCartFill className="iconEffect easeInOutEffect " />
          </button>
        </div>
      </div>
    </nav>
  );
}
