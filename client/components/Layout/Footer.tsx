import Whatsapp from '@/public/assets/icons/whatsapp.svg'
import Web from '@/public/assets/icons/web.svg'
import Location from '@/public/assets/icons/location.svg'
import Instagram from '@/public/assets/icons/instagram.svg'
import Logo from '@/public/assets/Logo.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full pt-4 border-t pb-2 max-876:pb-[52px]">
        <div className="flex flex-col gap-4 container-wrapper">
            <div className='w-full grid grid-cols-1 gap-x-4 gap-y-2 876:grid-cols-4'>
                <Link href={'/'} className='flex flex-col max-876:items-center gap-1'>
                    <Whatsapp width='30' height='30' fill='#A9B0B9'/>
                    <p className='text-xs text-third-dark mt-2'>Центр решений</p>
                    <p className='text-sm font-semibold text-third-dark'>Центр решений</p>
                </Link> 
                <Link href={'/'} className='flex flex-col max-876:items-center gap-1'>
                    <Location width='30' height='30' fill='#A9B0B9'/>
                    <p className='text-xs text-third-dark mt-2'>Свяжитесь с нами здесь</p>
                    <p className='text-sm font-semibold text-third-dark'>Адрес нашего магазина</p>
                </Link> 
                <Link href={'/'} className='flex flex-col max-876:items-center gap-1'>
                    <Web width='30' height='30' fill='#A9B0B9'/>
                    <p className='text-xs text-third-dark mt-2 876:pr-8'>Для получения дополнительной информации о Белене</p>
                    <p className='text-sm font-semibold text-third-dark'>www.belenay.com</p>
                </Link> 
                <Link href={'/'} className='flex flex-col max-876:items-center gap-1'>
                    <Instagram width='30' height='30' fill='#A9B0B9'/>
                    <p className='text-xs text-third-dark mt-2'>Наш аккаунт в Инстаграм</p>
                    <p className='text-sm font-semibold text-third-dark'>@belenay</p>
                </Link> 
            </div>

            <div className='flex items-center 876:justify-between gap-3 max-876:flex-col border-t py-3 px-2'>
                <Logo fill='#020225' width='120' height='40'/>

                <p className='text-xs font-medium text-third-dark 876:text-sm'>© Все права защищены. Белленай 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Footer