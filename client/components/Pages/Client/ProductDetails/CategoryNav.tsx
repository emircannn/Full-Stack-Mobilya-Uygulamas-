'use client'

import Link from "next/link"

const CategoryNav = () => {
  return (
    <nav className="container-wrapper py-3">
        <ul className="flex items-center flex-wrap gap-2 text-sm font-medium text-third-dark">
            <li className="flex items-center gap-2">
                <Link className="hover:text-primary-light duration-300" href={'/'}>
                Главная
                </Link>
                /
            </li>
            <li className="flex items-center gap-2">
                <Link className="hover:text-primary-light duration-300" href={'/catalog/kose_koltuk'}>
                Угловое сиденье  
                </Link>
                
            </li>
        </ul>
    </nav>
  )
}

export default CategoryNav