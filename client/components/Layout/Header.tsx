'use client'
import Link from 'next/link';
import Logo from '../../public/assets/Logo.svg'
import Search from './Search'
import { CiUser, CiHeart  } from "react-icons/ci";
import Categories from './Categories';
import useLoginModal from '@/hooks/LoginModalStore';

const Header = () => {

    const loginModal = useLoginModal()

  return (
    <header className="container-wrapper bg-white z-50 max-876:sticky max-876:top-0 max-876:py-2 876:pt-4 flex flex-col">
        <div className="grid grid-cols-2 876:grid-cols-3 items-center">
            <div className="w-full">
                <Link href={'/'} className='876:hidden'>
                <Logo fill='#020225' height='48'/>
                </Link>
                <Link href={'/'} className='max-876:hidden'>
                <Logo fill='#020225' width='100'/>
                </Link>
            </div>

            <div className='w-full'>
                <Search/>
            </div>

            <div className='flex items-center gap-3 justify-end max-876:hidden'>
                <button onClick={loginModal.onOpen} className='flex items-center gap-2 text-sm font-medium px-4 py-2 hover:bg-third rounded-full duration-300'>
                    <CiUser size={22} className="text-neutral-600"/>
                    вход
                </button>
                <button className='flex items-center gap-2 text-sm font-medium px-4 py-2 hover:bg-third rounded-full duration-300'>
                    <CiHeart size={22} className="text-neutral-600"/>
                    избранные
                </button>
            </div>
        </div>
        <Categories/>
    </header>
  )
}

export default Header