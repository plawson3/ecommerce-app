import React from "react";
import product1 from "../../public/product1.jpg";
import Image from "next/image";

export default function Info() {
  return (
    <div className="flex flex-col my-10 items-center justify-center content-center ">
      <div className="flex flex-col gap-5 justify-center ">
        <h1 className="text-4xl font-bold font-sans" >Subscribe Our Newsletter</h1>
        <p>Get the latest information and promo offers directly</p>
        <div>
            <input type="text" placeholder="Input Email Address" />
            <button className="bg-black text-white text-lg px-4 py-1" >Get Started</button>
        </div>
      </div>
    </div>
  );
}
