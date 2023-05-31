import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import product1 from "../../../public/product1.jpg";
import Footer from "@/components/Footer";

const Product = ({
  ProductId,
  Name,
  Category,
  Price,
}: {
  ProductId: string;
  Name: string;
  Category: string;
  Price: string;
}) => {
  return (
    <div>
      <Link href={`/products/${ProductId}`}>
        <div className="hover:opacity-75 hover:transition hover:ease-in-out">
          <Image src={product1} alt="" width={280} height={150} />
        </div>
        <div className=" flex flex-col gap-1 my-1">
          <h1 className="text-xl font-semibold">{Name}</h1>
          <p className="text-lg font-semibold text-gray-500 ">{Category}</p>
          <p className="text-lg font-semibold">{Price}</p>
        </div>
      </Link>
    </div>
  );
};

export default function Products() {
  return (
    <div className="container w-11/12 mx-auto">
      <Navbar />
      <div className="my-16 mx-5 flex flex-wrap gap-20 justify-center">
        <Product
          ProductId="1"
          Name={"Brushed Raglan Sweatshirt"}
          Category="Sweater"
          Price="$195"
        />
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
      <Footer />
    </div>
  );
}
