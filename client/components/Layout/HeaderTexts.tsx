import Link from 'next/link'

const HeaderTexts = () => {
  return (
    <div className='w-full h-[50px] z-50 bg-primary-light flex items-center justify-center animate-fade max-876:hidden sticky top-0'>
        <Link href={'/'} className='text-white font-bold text-lg animate-pulse'>
        Новогодние специальные предложения!
        </Link>
    </div>
  )
}

export default HeaderTexts