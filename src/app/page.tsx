import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ProductSection from "@/components/ProductSection";
import Promotion from "@/components/Promotion";

export default function Home() {
  return (
    <div className="container w-11/12 mx-auto">
      <Navbar />
      <Hero />
      <Promotion/>
      <ProductSection/>
      <Info/>
      <Newsletter/>
    </div>
  );
}
