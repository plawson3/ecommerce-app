"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import product2 from "../../../public/product2.jpg";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { IncDecButton } from "../products/[id]/page";
import { useState } from "react";

export default function Cart() {
  const [count, setCount] = useState(1);
  return (
    <div className="container w-11/12 mx-auto">
      <Navbar />
      <div className="my-28 mx-20">
        <h1 className="font-bold text-3xl">Shopping Cart</h1>
        <div className="my-5 flex ">
          <div className="flex gap-10 basis-3/4 ">
            <div className="basis-auto">
              <Image src={product2} alt="" className=" w-48 rounded-lg" />
            </div>
            <div className="flex flex-col gap-4 basis-2/3 p-2 ">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold ">
                  Flex Push Button Bomber
                </h1>
                <p>
                  <AiFillDelete className="text-3xl" />
                </p>
              </div>
              <div className="text-lg font-semibold text-gray-500">Dress</div>
              <div className="text-lg font-semibold">Delivery Estimation</div>
              <div className="text-lg font-semibold text-yellow-400">
                5 Working Days
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">$225</p>
                <div className="flex gap-5 items-center">
                  <IncDecButton
                    text="-"
                    setCount={(val: number) => {
                      count > 1 ? setCount((state) => state - val) : null;
                    }}
                  />
                  <h1>{count}</h1>
                  <IncDecButton
                    text="+"
                    setCount={(val: number) => {
                      setCount((state) => state + val);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-auto">
            <div>Order Summary</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
