import React from "react";
import product1 from "../../public/product1.jpg";
import Image from "next/image";

export default function Info() {
  return (
    <div className="flex flex-col my-10 items-center justify-center content-center ">
      <div className="flex flex-col gap-6" style={{padding:"0 5rem 4rem"}}>
        <div className="flex my-10">
          <div className="w-1/2"></div>
          <div className="text-5xl font-bold font-sans w-1/2">
            Unique and Authentic Vintage Designer Jewellery
          </div>
        </div>
        <div className="flex">
          {/* lower left down*/}
          <div className="flex flex-wrap relative z-2" style={{flexBasis:"fit-content"}}>
            <h1 className="text-8xl font-bold absolute z-1 opacity-5 w-full h-full">Different from others
</h1>
            <div className="flex flex-col gap-2 justify-start w-1/2">
              <h1 className="font-mono text-lg font-bold ">
                Using Good Quality Materials
              </h1>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col gap-2 justify-start w-1/2">
              <h1 className="font-mono text-lg font-bold  ">
                Using Good Quality Materials
              </h1>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col gap-2 justify-start w-1/2">
              <h1 className="font-mono text-lg font-bold  ">
                Using Good Quality Materials
              </h1>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col gap-2 justify-start w-1/2">
              <h1 className="font-mono text-lg font-bold  ">
                Using Good Quality Materials
              </h1>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* lower right Down */}
          <div className="flex">
            <div className="flex w-1/2 justify-evenly">
              <Image src={product1} alt="" width={250} />
            </div>
            <div className="flex flex-col gap-4 w-1/2 justify-center text-lg ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                quos natus ullam aperiam quas illo! Quas ut ipsam harum
                mollitia, cupiditate eius totam blanditiis culpa qui.
              </p>
              <div>
                <button className="bg-black font-serif text-sm font-semibold text-white p-3.5">
                  See All Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
