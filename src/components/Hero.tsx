import Image from "next/image";
import React from "react";
import { BsCart } from "react-icons/bs";
import mainpic from "../../public/mainpic1.jpg";
import mainpicgreyscale1 from "../../public/mainpicgreyscale1.png";
import mainpicgreyscale2 from "../../public/mainpicgreyscale2.jpg";

export default function Hero() {
  return (
    <div className=" flex mx-5 ">
      <div className="my-20 space-y-10 basis-1/2 ">
        <label className="bg-blue-200 text-purple-700 rounded px-3 py-1 text-lg ">
          Sale 75%
        </label>
        <h1 className="text-5xl font-semibold ">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-lg max-w-md ">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="flex space-x-2 text-2xl font-semibold font-mono bg-gray-800 text-white p-3 items-center rounded hover:easeInOutEffect hover:bg-gray-600 ">
          <BsCart />
          <p>Start Shopping</p>
        </button>
      </div>
      <div className="flex  my-10 basis-1/2 overflow-hidden">
        <Image
          src={mainpicgreyscale1}
          alt="Main Picture"
          height={600}
          width={600}
          style={{ objectFit: "fill", borderRadius: "100px", filter:"drop-shadow()" }}
        />
      </div>
    </div>
  );
}