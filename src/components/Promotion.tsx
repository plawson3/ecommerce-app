import Image from "next/image";
import promotional1 from "../../public/promotional1.jpg";
import promotional2 from "../../public/promotional2.jpg";
import promotional5 from "../../public/promotional5.jpg";

export default function Promotion() {
  return (
    <div className=" flex flex-col my-5 items-center justify-center content-center ">
      <div className="justify-center text-4xl font-bold my-10">
        <h1>Our Promotions Events</h1>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 ">
          <Image src={promotional1} alt="" width={500} />
          <Image src={promotional1} alt="" width={500} />
        </div>
        <div className="flex gap-5">
          <Image src={promotional5} alt="" height={320} />
          <Image src={promotional5} alt="" height={320} />
        </div>
      </div>
    </div>
  );
}
