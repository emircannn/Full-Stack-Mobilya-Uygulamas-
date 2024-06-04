'use client'

import ImageComp from "@/components/UI/ImageComp"
import Link from "next/link"

const Categories = () => {
  return (
    <div className="container-wrapper flex flex-col items-center gap-3 py-4">
        <p className="text-sm 876:text-lg font-semibold text-third-dark">Оживите свое жилое пространство</p>

        <div className="grid grid-cols-2 876:grid-cols-3 xl:grid-cols-4 gap-2 w-full">
            <Link href={'/'} className="flex flex-col gap-2 items-center">
                <ImageComp
                src="/assets/category.webp"
                ImageClassProps="object-cover w-full h-full rounded-xl overflow-hidden"
                />

                <p className="text-xs 876:text-sm font-semibold">
                Угловое сиденье
                </p>
            </Link>
            <Link href={'/'} className="flex flex-col gap-2 items-center">
                <ImageComp
                src="/assets/category.webp"
                ImageClassProps="object-cover w-full h-full rounded-xl overflow-hidden"
                />

                <p className="text-xs 876:text-sm font-semibold">
                Угловое сиденье
                </p>
            </Link>
            <Link href={'/'} className="flex flex-col gap-2 items-center">
                <ImageComp
                src="/assets/category.webp"
                ImageClassProps="object-cover w-full h-full rounded-xl overflow-hidden"
                />

                <p className="text-xs 876:text-sm font-semibold">
                Угловое сиденье
                </p>
            </Link>
            <Link href={'/'} className="flex flex-col gap-2 items-center">
                <ImageComp
                src="/assets/category.webp"
                ImageClassProps="object-cover w-full h-full rounded-xl overflow-hidden"
                />

                <p className="text-xs 876:text-sm font-semibold">
                Угловое сиденье
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Categories