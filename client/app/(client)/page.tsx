import Categories from "@/components/Pages/Client/Home/Categories";
import Icons from "@/components/Pages/Client/Home/Icons";
import ProductsWrapper from "@/components/Pages/Client/Home/ProductWrapper";
import SliderWrapper from "@/components/Pages/Client/Home/Slider/SliderWrapper";

export default function Home() {
  return (
    <main className="876:space-y-8 space-y-4 h-full pb-5">
      <SliderWrapper/>
      <Icons/>
      <ProductsWrapper/>
      <Categories/>
    </main>
  );
}
