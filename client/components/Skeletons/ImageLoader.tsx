import Skeleton from "@mui/material/Skeleton";
import React from "react";
import Logo from '@/public/assets/Logo.svg'
interface Props {
    noLogo?: boolean;
    noText?: boolean;
    logoSize?: string;
}

const ImageLoader : React.FC<Props> = ({
    noLogo=false,
    noText=false,
    logoSize='90'
}) => {

  return (
    <div className="w-full h-full relative">
        <Skeleton 
        animation="wave"
        sx={{ bgcolor: '#F6F6F6',
            width : '100%', 
            height: '100%',
            transformOrigin: '0 0',
            transform: 'scale(1, 1)'}}
        />

        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center gap-3 flex-col">
            {
                !noLogo && (
                    <Logo width={logoSize} height={logoSize} fill='#A0A0A0'/>
                )
            }
        </div>
    </div>
  )
}

export default ImageLoader