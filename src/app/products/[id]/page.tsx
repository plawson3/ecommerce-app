"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import product1 from "../../../../public/product1.jpg";
import { BsCart } from "react-icons/bs";
import { useState } from "react";

const MyButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-gray-200 p-3 rounded-full font-bold hover:bg-gray-400 hover:text-white hover:transition hover:ease-in-out">
      {text}
    </button>
  );
};

export const IncDecButton = ({
  text,
  setCount,
}: {
  text: string;
  setCount: Function;
}) => {
  return (
    <>
      <button
        onClick={() => setCount(1)}
        className="bg-gray-200 p-3 rounded-full font-bold hover:bg-gray-400 hover:text-white hover:transition hover:ease-in-out"
      >
        {text}
      </button>
    </>
  );
};

export default function Item({ params }: { params: Object }) {
  const [count, setCount] = useState(1);

  return (
    <div className="container w-11/12 mx-auto">
      <Navbar />
      <div className="my-16 mx-5 flex flex-col gap-20 justify-center">
        <div className="flex gap-10 items-center ">
          <div className="flex basis-1/2 justify-center ">
            <Image src={product1} alt="" className="rounded-2xl h-1/2 w-2/3" />
          </div>
          <div className="flex flex-col basis-1/2 gap-10 ">
            <div className=" flex flex-col gap-2">
              <h1 className="font-semibold font-mono text-4xl">
                Flex Push Button Bomber
              </h1>
              <p className="font-semibold text-xl text-gray-500">Jackets</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">SELECT SIZE</h2>
              <div className="flex p-2 gap-2">
                <MyButton text="S" />
                <MyButton text="M" />
                <MyButton text="L" />
              </div>
            </div>
            <div className="flex gap-8 items-center ">
              <p className="text-xl font-bold">Quantity : </p>
              <div className="flex gap-5 items-center ">
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
            <div className="flex gap-5 items-center">
              <button className="flex space-x-3 text-xl font-semibold font-mono bg-gray-800 text-white p-2 items-center rounded hover:easeInOutEffect hover:bg-gray-600 hover:text-gray-800  ">
                <BsCart />
                <p>Add to Cart</p>
              </button>
              <h1 className="text-2xl font-bold">$225.00</h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
