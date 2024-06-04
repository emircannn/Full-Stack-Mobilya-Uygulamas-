import ImageLoader from "@/components/Skeletons/ImageLoader"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

interface Props {
    src: string,
    alt?: string,
    href: string
}
const SliderImage: React.FC<Props> = ({
    src,
    alt='slider',
    href= '/',
}) => {

    const [loaded, setLoaded] = useState(false)

  return (
    <Link 
    className="w-full h-full relative overflow-hidden rounded-2xl flex"
    href={href}>
        {!loaded && (
        <ImageLoader/>
        )
        }

        <Image 
        quality={100} 
        alt={alt}
        src={src} 
        loading="lazy"
        onLoad={() => setLoaded(true)}
        width={1800}
        height={750} 
        className="object-cover w-full h-full"/>
    </Link>
    )
}

export default SliderImage