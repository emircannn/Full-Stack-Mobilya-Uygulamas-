import Image from "next/image";
import Link from "next/link"
import ImageComp from "../UI/ImageComp";

const Categories = () => {

  const fakeData = [
    {
        category: 'Мебель для спальни',
        subCategory: ["Шкаф", "Кровать", "Комод", "Тумбочка", "Зеркало"]
    },
    {
        category: 'Мебель для гостиной',
        subCategory: ["Диван", "Кресло", "Журнальный стол", "ТВ-тумба", "Стеллаж"]
    },
    {
        category: 'Мебель для столовой',
        subCategory: ["Стол", "Стул", "Буфет", "Витрина", "Подставка для бокалов"]
    },
    {
        category: 'Офисная мебель',
        subCategory: ["Рабочий стол", "Кресло для офиса", "Полка для документов", "Файловый шкаф"]
    },
    {
        category: 'Детская мебель',
        subCategory: ["Детская кровать", "Пеленальный столик", "Комод для детской", "Стульчик для кормления"]
    },
    {
        category: 'Садовая мебель',
        subCategory: ["Садовый стол", "Садовые стулья", "Шезлонг", "Зонты", "Шезлонги"]
    },
    {
        category: 'Ванная мебель',
        subCategory: ["Умывальник", "Тумба под умывальник", "Полка для ванны", "Зеркало для ванной"]
    }
];

  return (
    <nav id="navigation">
      <ul className="py-2 flex items-center gap-5 max-876:hidden">
        {
          fakeData.map((data, i) => (
            <li key={i} className="text-sm font-medium group py-4 relative hover:text-primary-light duration-300 underline-hover">
                <Link href={'/'}>
                {data.category}
                </Link>

                  <div className="hidden group-hover:block animate-fade top-[186px] left-0 w-screen fixed bg-white h-fit min-h-[100px] z-50 border-b border-third categories-shadow">
                    <div className="container-wrapper py-8 grid grid-cols-6 gap-x-2 gap-y-7">
                    {
                        data.subCategory.map((sub, i) => (
                          <Link href={'/'} key={i} className="hover:text-primary-light duration-300 flex flex-col gap-2 items-center justify-center w-full">
                              <ImageComp
                                src='/assets/test3.jpg'
                                alt={sub}
                                classProps="w-[70px] aspect-square shrink-0 rounded-lg overflow-hidden relative"
                                imageHeight={120}
                                imageWidht={120}
                                wrapperHeight="70px"
                                wrapperWidth="70px"
                                loaderLogoSize="40"
                                quality={100}/>
                          {sub}
                          </Link>
                        ))
                      }
                    </div>
                  </div>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Categories