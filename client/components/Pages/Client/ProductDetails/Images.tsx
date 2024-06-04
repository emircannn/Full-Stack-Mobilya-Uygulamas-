'use client'

import ImageComp from "@/components/UI/ImageComp"
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaHeart } from "react-icons/fa"
import Slider from "react-slick";

const Images = () => {

  interface ArrowButtonProps {
    onClick: () => void;
  }
  
  const PrevBtn : React.FC<ArrowButtonProps> = ({onClick}) => {
    return (
        <button 
          onClick={onClick} 
          className="absolute top-0 !left-0 h-full w-[35px] shrink-0 bg-third-dark hover:bg-secondary duration-300 text-white flex items-center justify-center">
            <BiChevronLeft size={28}/>
          </button>
    );
  };
  const NextBtn: React.FC<ArrowButtonProps> = ({onClick}) => {
    return (
        <button 
        onClick={onClick} 
        className="absolute top-0 !right-0 h-full w-[35px] shrink-0 bg-third-dark hover:bg-secondary duration-300 text-white flex items-center justify-center">
          <BiChevronRight size={28}/>
        </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'slider-size animate-fade slider-padding',
    nextArrow: <NextBtn onClick={() => {}}/>,
    prevArrow: <PrevBtn onClick={() => {}}/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  const images = [
    '/assets/urun.webp',
    '/assets/urun2.webp',
    '/assets/urun3.webp',
    '/assets/urun4.webp',
    '/assets/urun2.webp',
  ]

  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section className="flex flex-col gap-5">
        <div className="relative w-full aspect-video overflow-hidden">
            <ImageComp
                src={images[selectedImage]}
                quality={100}
                imageHeight={1000}
                imageWidht={1000}
            />

          <span className="absolute top-2 rounded-r-xl left-0 py-1 px-3 text-white text-xs font-semibold bg-secondary">скидка</span>
          <span className={`absolute top-10 rounded-r-xl left-0 py-1 px-3 text-white text-xs font-semibold bg-secondary`}>Новый продукт</span>

          <button className="w-8 aspect-square group hover:bg-secondary duration-300 rounded-full flex items-center justify-center bg-primary-light absolute right-2 top-2">
            <FaHeart className="text-secondary group-hover:text-primary-light"/>
          </button>
        </div>

        <div className="w-full aspect-[5/1] 876:aspect-[7/1] overflow-hidden">
          <Slider {...settings}>
              {
                images.map((v, i) => (
                  <div key={i} 
                  onClick={() => setSelectedImage(i)}
                  className={`px-2 flex h-full duration-300 cursor-pointer ${i !== selectedImage ? 'opacity-70' : 'opacity-100'}`}>
                    <ImageComp
                        src={v}
                        quality={100}
                    />
                  </div>
                ))
              }
          </Slider>
        </div>
    </section>
  )
}

export default Images