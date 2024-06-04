'use client'

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import SliderImage from "./SliderImage";

const SliderWrapper = () => {

  interface ArrowButtonProps {
    onClick: () => void;
  }
  
  const PrevBtn : React.FC<ArrowButtonProps> = ({onClick}) => {
    return (
      <div className="absolute top-0 left-3 h-full w-fit flex items-center 876:left-6 z-30">
        <button 
      onClick={onClick} 
      className=" w-8 876:w-14 aspect-square shrink-0 bg-primary-light/50 hover:bg-secondary duration-300 text-white rounded-full flex items-center justify-center">
        <BiChevronLeft size={28}/>
      </button>
      </div>
    );
  };
  const NextBtn: React.FC<ArrowButtonProps> = ({onClick}) => {
    return (
      <div className="absolute top-0 right-3 h-full w-fit flex items-center 876:right-6 z-30">
      <button 
      onClick={onClick} 
      className=" w-8 876:w-14 aspect-square shrink-0 bg-primary-light/50 hover:bg-secondary duration-300 text-white rounded-full flex items-center justify-center">
        <BiChevronRight size={28}/>
      </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    fade: true,
    className: 'slider-size animate-fade',
    pauseOnHover: true,
    nextArrow: <NextBtn onClick={() => {}}/>,
    prevArrow: <PrevBtn onClick={() => {}}/>,
  };

  return (
    <div className="w-full aspect-[16/5.9] max-876:p-3 876:px-6 rounded-xl overflow-hidden slider-container">
        <Slider {...settings}>
            <SliderImage href="/" src='/assets/test.webp' alt="test"/>
            <SliderImage href="/" src='/assets/test2.webp' alt="test"/>
        </Slider>
    </div>
  )
}

export default SliderWrapper