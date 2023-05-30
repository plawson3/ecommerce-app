"use client";
// import { useState } from "react";
// import Product1 from "../../public/product1.jpg";
// import Image, { StaticImageData } from "next/image";

// // const Item = ({
// //   picture,
// //   name,
// //   price,
// // }: {
// //   picture: StaticImageData;
// //   name: string;
// //   price: string;
// // }) => {
// //   return (
// //     <div>
// //       <Image src={picture} alt="" width={300} />
// //       <div className="flex flex-col gap-2 my-2 font-serif font-semibold text-lg" >
// //         <h1>{name}</h1>
// //         <h1>{price}</h1>
// //       </div>
// //     </div>
// //   );
// // };

// const Item = ({
//   picture,
//   name,
//   price,
// }: {
//   picture: StaticImageData;
//   name: string;
//   price: string;
// }) => {
//   const [hovered, setHovered] = useState(false);

//   const handleHover = () => {
//     setHovered(true);
//   };

//   const handleLeave = () => {
//     setHovered(false);
//   };

//   return (
//     <div
//       className={`flex flex-col items-center gap-2 my-2 font-serif font-semibold text-lg transition-transform ${
//         hovered ? "transform scale-105" : ""
//       }`}
//       onMouseEnter={handleHover}
//       onMouseLeave={handleLeave}
//     >
//       <div
//         className={`${
//           hovered
//             ? "transition-transform ease-in-out duration-500 transform hover:translate-y-[-5px]"
//             : ""
//         }`}
//       >
//         <Image src={picture} alt="" width={300} />
//       </div>
//       <h1>{name}</h1>
//       <h1>{price}</h1>
//     </div>
//   );
// };

// export default function ProductSection() {
//   return (
//     <div className=" flex flex-col my-5 items-center justify-center content-center ">
//       <div className="justify-center text-4xl font-bold my-10">
//         <h1>Check What We Have</h1>
//       </div>
//       <div className="flex gap-5">
//         <Item
//           picture={Product1}
//           name={"Brushed Raglan Sweatshirt"}
//           price={"$195"}
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import Product1 from "../../public/product1.jpg";
import Product2 from "../../public/product2.jpg";
import Product3 from "../../public/product3.jpg";
import Product4 from "../../public/product4.jpg";

const Item = ({
  picture,
  name,
  price,
}: {
  picture: StaticImageData;
  name: string;
  price: string;
}) => {
  return (
    <div
      className="flex flex-col items-center gap-2 my-2 font-serif font-semibold text-lg 
                    hover:transform hover:scale-125 hover:transition honver:ease-in-out  "
    >
      <div>
        <Image src={picture} alt="" width={300} />
      </div>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </div>
  );
};

export default function ProductSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col my-5 items-center justify-center content-center">
      <div className="justify-center text-4xl font-bold my-10">
        <h1>Check What We Have</h1>
      </div>
      <div className="w-full">
        <Slider {...settings}>
          <Item
            picture={Product1}
            name="Brushed Raglan Sweatshirt"
            price="$195"
          />
          <Item picture={Product2} name="Denim Jeans" price="$99" />
          <Item picture={Product3} name="Leather Jacket" price="$299" />
          <Item picture={Product4} name="Printed T-Shirt" price="$35" />
        </Slider>
      </div>
    </div>
  );
}
