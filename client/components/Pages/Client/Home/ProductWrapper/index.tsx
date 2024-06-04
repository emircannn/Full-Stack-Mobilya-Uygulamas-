'use client'

import Product from "@/components/UI/Product"
import { useState } from "react"
import Slider from "react-slick"

const ProductsWrapper = () => {

  const [type, setType] = useState('discounted')

  const types = [
    {name: 'Скидки', value: 'discounted'},
    {name: 'Бестселлеры', value: 'mostsolded'},
    {name: 'новые продукты', value: 'newest'},
  ]

  interface TypeProps {
    name: string;
    value: string;
    onClick: () => void;
  }

  const TypeButton: React.FC<TypeProps> = ({
    name,
    value,
    onClick,
  }) => {
    return (
      <>
      <button 
      onClick={onClick}
      className={`w-full pb-5 px-4 flex items-center justify-center max-lg:hidden text-2xl border-b-2 duration-300 transition-colors
      ${type === value ? 'text-primary-light border-primary-light' : 'text-third-dark border-third-dark'} `}>
        {name.split(' ')[1] ? 
        <p>
          <b>{name.split(' ')[0]}</b> {name.split(' ')[1]}
        </p>
        : name}
      </button>
      
      <button
      onClick={onClick}
      className={`lg:hidden text-xs font-medium py-3  border-b duration-300
      ${type === value ? 'text-white bg-primary-light border-primary-light' : 'text-third-dark border-third-dark'} `}
      >
        {name.split(' ')[1] ? 
        <p>
          <b>{name.split(' ')[0]}</b> {name.split(' ')[1]}
        </p>
        : name}
      </button>
      </>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: 'slider-size animate-fade',
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
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const products = [
    {name: 'Test Ürün 1',
    images: ['/assets/urun.webp', '/assets/urun2.webp', '/assets/urun3.webp', '/assets/urun4.webp'],
    price: 140,
    special: 126,
    discounted: true,
    newest: true,
    currency: 'USD',
    href: '/catalog/details/test1'
    },
    {name: 'Test Ürün 2',
    images: ['/assets/urun2.webp', '/assets/urun.webp', '/assets/urun3.webp', '/assets/urun4.webp'],
    price: 185,
    special: null,
    discounted: false,
    newest: true,
    currency: 'USD',
    href: '/catalog/details/test1'
    },
    {name: 'Test Ürün 3',
    images: ['/assets/urun3.webp', '/assets/urun.webp', '/assets/urun3.webp', '/assets/urun4.webp'],
    price: 25600,
    special: 22000,
    discounted: true,
    newest: true,
    currency: 'SOM',
    href: '/catalog/details/test1'
    },
    {name: 'Test Ürün 4',
    images: ['/assets/urun4.webp', '/assets/urun.webp', '/assets/urun3.webp', '/assets/urun4.webp'],
    price: 200,
    special: 190,
    discounted: true,
    newest: false,
    currency: 'USD',
    href: '/catalog/details/test1'
    },
    {name: 'Test Ürün 1',
    images: ['/assets/urun.webp', '/assets/urun2.webp', '/assets/urun3.webp', '/assets/urun4.webp'],
    price: 140,
    special: 126,
    discounted: true,
    newest: true,
    currency: 'USD',
    href: '/catalog/details/test1'
    },
    {name: 'Test Ürün 2',
    images: ['/assets/urun2.webp', '/assets/urun.webp', '/assets/urun3.webp', '/assets/urun4.webp'],
    price: 185,
    special: null,
    discounted: false,
    newest: true,
    currency: 'USD',
    href: '/catalog/details/test1'
    },
    {name: 'Test Ürün 3',
    images: ['/assets/urun3.webp', '/assets/urun.webp', '/assets/urun3.webp', '/assets/urun4.webp'],
    price: 25600,
    special: 22000,
    discounted: true,
    newest: true,
    currency: 'SOM',
    href: '/catalog/details/test1'
    },
    {name: 'Test Ürün 4',
    images: ['/assets/urun4.webp', '/assets/urun.webp', '/assets/urun3.webp', '/assets/urun4.webp'],
    price: 200,
    special: 190,
    discounted: true,
    newest: false,
    currency: 'USD',
    href: '/catalog/details/test1'
    },
  ]

  return (
    <div className="container-wrapper space-y-3">
      <div className="grid grid-cols-3 w-full">
      {
        types?.map((v, i) => (
          <TypeButton
          key={i}
          name={v.name}
          value={v.value}
          onClick={() => setType(v.value)}
          />
        ))
      }
      </div>

      <div className="w-full">
        <Slider {...settings}>
          {
            products?.map((v, i) => (
              <div key={i} className="px-2 w-full">
                <Product
                name={v.name}
                images={v.images}
                price={v.price}
                special={v.special}
                currency={v.currency}
                discounted={v.discounted}
                newest={v.newest}
                href={v.href}
                />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default ProductsWrapper