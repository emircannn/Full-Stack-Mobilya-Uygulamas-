'use client'

import { twMerge } from "tailwind-merge";

interface Props {
    onClick?: () => void;
    disabled?: boolean;
    buttonName: string;
    bgColor?: string;
    gradient?: boolean;
    textColor?: string;
    textSize?: string;
    from?: string;
    to?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    borderColor?: string;
    fontWeight?: string;
    merge?: string;
}

const Button: React.FC<Props> = ({
    onClick,
    disabled,
    buttonName,
    bgColor='#0d074f',
    gradient=false,
    from,
    to,
    textColor='#fff',
    textSize='12px',
    width='180px',
    height='40px',
    borderRadius = '22px',
    borderColor = 'transparent',
    merge,
}) => {
  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    style={{
        width,
        height,
        borderRadius,
        borderColor,
        background: gradient ? `linear-gradient(to right, ${from}, ${to})` : '',
        backgroundColor: !gradient ? bgColor : '',
        color: textColor,
        fontSize: textSize,
    }}
    className={twMerge(`flex items-center justify-center gap-2 duration-300 disabled:cursor-not-allowed disabled:opacity-75 hover:opacity-75`, merge)}>
        {buttonName}
    </button>
  )
}

export default Button