'use client'

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Collapse from "@mui/material/Collapse";

const Filters = () => {

    const [subcategory, setSubcategory] = useState(true)

  return (
    <div className="sticky top-[50px]">
        <p className="px-2 text-base font-semibold py-4 border-b">
            Фильтры
        </p>

        <div className="px-2 py-4 border-b">
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
    </div>
  )
}

export default Filters