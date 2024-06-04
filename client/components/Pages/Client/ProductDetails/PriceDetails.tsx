'use client'

import Button from "@/components/UI/Button"
import useQuestionModal from "@/hooks/QuestionModalStore"
import { priceMasking } from "@/utils/helpers"
import Image from "next/image"

const PriceDetails = () => {

  const questionModal = useQuestionModal()

  return (
    <div className="!sticky !self-start !top-0 flex flex-col gap-4">
        <h1 className="text-lg lg:text-xl xl:text-2xl font-medium line-clamp-2">Каркас кровати Вероника 180X200</h1>
        <div className="flex max-876:items-center gap-2 flex-wrap 876:flex-col">
          <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-third-dark line-through">{priceMasking(65000, 'SOM')}</p>
          <p className="text-xl lg:text-2xl xl:text-3xl font-semibold text-secondary">{priceMasking(62000, 'SOM')}</p>
        </div>

        <p className="text-xs 876:text-sm font-semibold text-third-dark">Код акций : 57749025XL</p>

        <div className="space-y-2">
          <Image
          alt="bank"
          src={'/assets/bank.svg'}
          width={60}
          height={60}
          quality={100}
          />
          <p className="text-xs 876:text-sm font-semibold text-third-dark">
          Возможность рассрочки в Кыргыз банкы
          </p>
        </div>

        <div className="flex 876:flex-col gap-x-3 gap-y-4">
        <Button
          buttonName="Связаться с нами"
          width="100%"
          onClick={() => {}}
        />
        <Button
          buttonName="Задавать вопрос"
          width="100%"
          onClick={questionModal.onOpen}
          bgColor="#e09e2a"
        />
        </div>
    </div>
  )
}

export default PriceDetails