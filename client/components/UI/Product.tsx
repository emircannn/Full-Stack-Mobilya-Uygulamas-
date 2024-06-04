'use client'

import { priceMasking } from "@/utils/helpers";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import ImageComp from "./ImageComp";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";

interface Props {
  name: string;
  images: string[];
  price: number;
  special?: number | null;
  discounted?: boolean;
  newest?: boolean;
  currency: string;
  href?: string;
  buttonClick? : () => void;
}

const Product: React.FC<Props> = ({
  name,
  images,
  price,
  special,
  discounted,
  newest,
  currency,
  href='/',
  buttonClick
}) => {

  const [currentImage, setCurrentImage] = useState(0)

  const {push} = useRouter()

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 lg:gap-3 text-center">
      {/* Images */}
        <div  className="relative w-full flex aspect-[1.33/1] rounded-xl overflow-hidden">
          <Link href={href} className="">
          <ImageComp
          src={images[currentImage]}
          quality={100}
          imageHeight={350}
          imageWidht={350}
          />
          <div className="absolute max-lg:hidden w-full bottom-0 gap-2 left-0 py-2 flex items-center justify-center">
            {
              images?.map((v, i) => (
                <span
                key={i}
                className={`w-[10px] duration-300 aspect-square rounded-full ${i === currentImage ? 'bg-secondary' : 'bg-transparent border border-white'}`}
                />
              ))
            }
          </div>

          <div className={`absolute max-lg:hidden w-full h-full top-0 left-0 grid grid-cols-${images.length}`}>
            {
              images?.map((v, i) => (
                <div 
                key={i}
                onMouseEnter={() => setCurrentImage(i)}
                className="w-full h-full"/>
              ))
            }
          </div>
          </Link>

          {discounted && (<span className="absolute max-876:hidden top-2 rounded-r-xl left-0 py-1 px-3 text-white text-xs font-semibold bg-secondary">скидка</span>)}
          {newest && (<span className={`absolute max-876:hidden ${discounted ? 'top-10' : 'top-2'} rounded-r-xl left-0 py-1 px-3 text-white text-xs font-semibold bg-secondary`}>Новый продукт</span>)}

          <button className="w-8 aspect-square group hover:bg-secondary duration-300 rounded-full flex items-center justify-center bg-primary-light absolute right-2 top-2">
            <FaHeart className="text-secondary group-hover:text-primary-light"/>
          </button>
        </div>

        <Link href={href} className="font-medium truncate">
          {name}
        </Link>

        <div>
          <p className="text-sm font-medium text-secondary line-through">{priceMasking(price, currency)}</p>
          <p className="font-medium">{priceMasking(special ? special : price, currency)}</p>
        </div>

        <Button
        onClick={buttonClick ? buttonClick : () => push(href)}
        buttonName="Перейти к товару"
        width="90%"
        from="#0d074f"
        to="#020225"
        />
    </div>
  )
}

export default Product