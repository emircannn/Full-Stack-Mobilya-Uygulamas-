'use client'

import Product from "@/components/UI/Product";
import Slider from "react-slick";


const SimilarProducts = () => {

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
    <div className="container-wrapper py-6 876:py-12 space-y-3 876:space-y-6">
        <p className="text-center text-third-dark text-lg 876:text-2xl">
        <b>Похожие</b> продукты
        </p>

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

export default SimilarProducts