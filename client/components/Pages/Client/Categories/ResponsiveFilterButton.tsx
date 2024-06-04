'use client'

import { cn } from "@/lib/utils"
import { Collapse } from "@mui/material"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

const ResponsiveFilterButton = () => {

    const [open, setOpen] = useState(false)
    const [subcategory, setSubcategory] = useState(true)
    const [sort, setSort] = useState(false)

    const [value, setValue] = useState('default')

  return (
    <div className="876:hidden">
        <button onClick={() => setOpen(true)} className="text-xs px-4 py-2 border border-third-dark rounded-xl text-third-dark">
            Фильтровать и сортировать
        </button>

        <div className={cn("fixed top-0 left-0 w-[85%] bg-white shadow-xl h-full z-50 border-r duration-300", 
        open ? 'translate-x-0' : '-translate-x-[100%]')}>
            <div className="flex items-center justify-between p-4 border-b">
                <p className="text-sm font-semibold">Фильтровать и сортировать</p>

                <button 
                onClick={() => setOpen(false)}
                className="text-sm font-semibold">X</button>
            </div>

            <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">
                    Подкатегории
                    </p>

                    <button onClick={() => setSubcategory(!subcategory)}>
                        <IoIosArrowDown size={24} className={`text-third-dark duration-300 ${subcategory && '-rotate-180'}`}/>
                    </button>
                </div>
                <Collapse in={subcategory}>
                    <div className="flex flex-col gap-2 p-2 mt-2">
                        {[...Array(4)].map((v, i) => (
                            <label key={i} className="flex items-center gap-2">
                            <input 
                            type="checkbox"
                            className=" shrink-0 aspect-square outline-none accent-secondary focus:border-primary"/>

                            <span className="text-xs font-medium text-third-dark truncate">Угловое сиденье</span>
                        </label>
                        ))}
                    </div>
                </Collapse>
            </div>

            <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">
                    Сортировать
                    </p>

                    <button onClick={() => setSort(!sort)}>
                        <IoIosArrowDown size={24} className={`text-third-dark duration-300 ${sort && '-rotate-180'}`}/>
                    </button>
                </div>
                
                <Collapse in={sort}>
                <div className="flex flex-col mt-4">
                    <button 
                    onClick={() => setValue('default')}
                    className={cn('px-4 py-2 text-sm font-semibold duration-300', value === 'default' ? 'bg-primary-light text-white' : 'text-third-dark')}>
                    Рекомендуемая сортировка
                    </button>
                    <button 
                    onClick={() => setValue('asc')}
                    className={cn('px-4 py-2 text-sm font-semibold duration-300', value === 'asc' ? 'bg-primary-light text-white' : 'text-third-dark')}>
                    Повышенная цена
                    </button>
                    <button 
                    onClick={() => setValue('desc')}
                    className={cn('px-4 py-2 text-sm font-semibold duration-300', value === 'desc' ? 'bg-primary-light text-white' : 'text-third-dark')}>
                    Снижение цены
                    </button>
                </div>
                </Collapse>
            </div>
        </div>

        <div 
        onClick={() => setOpen(false)} 
        className={cn('fixed top-0 right-0 animate-fade h-full w-[15%] bg-neutral-800/75 z-50', !open && 'hidden')}/>
    </div>
  )
}

export default ResponsiveFilterButton