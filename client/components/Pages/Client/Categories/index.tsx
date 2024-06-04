'use client'

import Product from "@/components/UI/Product"
import CategoryNav from "../ProductDetails/CategoryNav"
import Filters from "./Filters"
import ResponsiveFilterButton from "./ResponsiveFilterButton"

const Categories = () => {

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
        <>
            <CategoryNav/>
            <div className="container-wrapper grid grid-cols-12">
                <aside className="max-876:hidden 876:col-span-3 relative">
                    <Filters/>
                </aside>

                <main className="space-y-4 col-span-12 876:col-span-9 876:p-4">
                    <h1 className="text-lg 876:text-xl font-semibold">
                    Угловое сиденье
                    </h1>
                    <section className="flex justify-between 876:justify-end items-center gap-3 border-b p-2 876:pb-6">
                        <p className="text-xs font-semibold text-third-dark">
                        Всего 531 товаров
                        </p>

                        <select name="" id="" className="text-xs outline-none focus:outline-none border p-2 font-medium max-876:hidden">
                            <option value="">Рекомендуемая сортировка</option>
                            <option value="">Повышенная цена</option>
                            <option value="">Снижение цены</option>
                        </select>

                        <ResponsiveFilterButton/>
                    </section>

                    <section className="grid grid-cols-2 876:grid-cols-3 gap-2 876:gap-4">
                    {
                        products?.map((v, i) => (
                            <Product
                            name={v.name}
                            images={v.images}
                            price={v.price}
                            special={v.special}
                            currency={v.currency}
                            discounted={v.discounted}
                            newest={v.newest}
                            href={v.href}
                            key={i}
                            />
                        ))
                    }
                    </section>
                </main>
            </div>
        </>
    )
}

export default Categories