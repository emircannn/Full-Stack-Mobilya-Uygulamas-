'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react"
import ImageLoader from "../Skeletons/ImageLoader";

interface Props {
    classProps?: string;
    ImageClassProps?: string;
    imageWidht?: number;
    imageHeight?: number;
    quality?: number;
    wrapperHeight?: string;
    wrapperWidth?: string;
    src: string;
    alt?: string;
    loading?: "lazy" | "eager" | undefined;
    loaderLogo?: boolean;
    loaderLogoSize?: string;
}

const ImageComp : React.FC<Props> = ({
    classProps,
    imageWidht=300,
    imageHeight=300,
    quality=75,
    wrapperHeight='100%',
    wrapperWidth='100%',
    src,
    alt='image',
    ImageClassProps='object-cover w-full h-full',
    loading='lazy',
    loaderLogo=false,
    loaderLogoSize
}) => {

    const [loaded, setLoaded] = useState(false)

  return (
    <div
    style={{width: wrapperWidth, height: wrapperHeight}}
    className={cn(classProps, "")}>
        {!loaded && (
        <ImageLoader 
        noLogo={loaderLogo}
        logoSize={loaderLogoSize}
        />
        )
        }

        <Image
        quality={quality} 
        alt={alt}
        src={src} 
        loading={loading}
        onLoad={() => setLoaded(true)}
        width={imageWidht}
        height={imageHeight} 
        className={cn(ImageClassProps, "")}/>
    </div>
  )
}

export default ImageComp