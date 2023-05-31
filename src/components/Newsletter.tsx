export default function Info() {
  return (
    <div className="flex flex-col my-52 items-center justify-center content-center ">
      <div className="flex flex-col gap-8 justify-center items-center ">
        <h1 className="text-9xl font-bold opacity-5 absolute">Newsletter</h1>
        <h1 className="text-5xl font-bold font-sans">
          Subscribe Our Newsletter
        </h1>
        <p className="font-light text-lg">
          Get the latest information and promo offers directly
        </p>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Input Email Address"
            className="border-2 border-black p-2 "
          />
          <button className="bg-black text-white text-lg px-4 py-1 rounded-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
