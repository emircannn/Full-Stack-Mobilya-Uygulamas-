import FreeDelivery from '@/public/assets/icons/freedelivery.svg'
import Delivery from '@/public/assets/icons/delivery.svg'
import PenRuler from '@/public/assets/icons/penruler.svg'

const Icons = () => {
  return (
    <div className="container-wrapper flex items-center gap-2 justify-between text-third-dark text-xs 876:text-sm font-semibold">
        <div className='flex items-center gap-y-3 gap-x-2 max-876:flex-col text-center'>
            <FreeDelivery width='40' height='40' fill={'#A9B0B9'}/>
            <p>Бесплатная доставка</p>
        </div>
        <div className='flex items-center gap-y-3 gap-x-2 max-876:flex-col text-center'>
            <Delivery width='40' height='40' fill={'#A9B0B9'}/>
            <p>Доставка по договоренности</p>
        </div>
        <div className='flex items-center gap-y-3 gap-x-2 max-876:flex-col text-center'>
            <PenRuler width='40' height='40' fill={'#A9B0B9'}/>
            <p>Бесплатная установка</p>
        </div>
    </div>
  )
}

export default Icons