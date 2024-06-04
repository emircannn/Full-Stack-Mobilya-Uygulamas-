'use client'
import Link from "next/link";
import { CiHome, CiUser, CiHeart  } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import useLoginModal from "@/hooks/LoginModalStore";

const BottomNav = () => {

    const loginModal = useLoginModal()

  return (
    <div className="fixed left-0 bottom-0 flex flex-col w-full h-fit 876:hidden">
        <span
        className="w-full h-[2px] bg-gradient-to-r from-primary-light to-secondary"
        />
        <div className="w-full h-[50px] shrink-0 grid grid-cols-4 bg-third text-neutral-600">
            <Link 
            href={'/'}
            className="flex flex-col gap-1 px-3 items-center text-xs font-medium justify-center">
                <CiHome size={22} className="text-neutral-600"/>
                Главная
            </Link>
            <button 
            className="flex flex-col gap-1 px-3 items-center text-xs font-medium justify-center">
                <BiCategory size={22} className="text-neutral-600"/>
                Kатегории
            </button>
            <button 
            className="flex flex-col gap-1 px-3 items-center text-xs font-medium justify-center">
                <CiHeart size={22} className="text-neutral-600"/>
                избранные
            </button>
            <button 
            onClick={loginModal.onOpen}
            className="flex flex-col gap-1 px-3 items-center text-xs font-medium justify-center">
                <CiUser size={22} className="text-neutral-600"/>
                вход
            </button>
        </div>
    </div>
  )
}

export default BottomNav