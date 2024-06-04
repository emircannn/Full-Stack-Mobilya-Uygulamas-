import { onlyDate } from "@/utils/helpers"
import { CiUser } from "react-icons/ci"

const Question = () => {

    const currentDate = Date.now()

  return (
    <div className="py-3 border-b w-full space-y-5">
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 aspect-square rounded-full bg-third border flex items-center justify-center">
                        <CiUser size={20} className="text-third-dark"/>
                    </div>
                    <p className="text-xs 876:text-sm font-semibold">E***** Y****</p>
                </div>

                <span className="text-xs 876:text-sm text-third-dark font-medium">
                    {onlyDate(currentDate)}
                </span>
            </div>

            <p className="text-xs 876:text-sm text-third-dark">
            Здравствуйте! Интересует каркас кровати Вероника размером 180x200. Подскажите, пожалуйста, из какого материала изготовлен каркас и какова максимальная нагрузка? Спасибо!
            </p>
        </div>

        <div className="px-3">
            <div className="flex flex-col gap-3 border-t pt-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 aspect-square rounded-full bg-third border flex items-center justify-center">
                            <CiUser size={20} className="text-third-dark"/>
                        </div>
                        <p className="text-xs 876:text-sm font-semibold">администратор</p>
                    </div>

                    <span className="text-xs 876:text-sm text-third-dark font-medium">
                        {onlyDate(currentDate)}
                    </span>
                </div>

                <p className="text-xs 876:text-sm text-third-dark">
                Здравствуйте! Каркас кровати Вероника размером 180x200 изготовлен из прочного металла, что обеспечивает его надежность и долговечность. Максимальная нагрузка составляет 300 кг. Если у вас есть еще вопросы, не стесняйтесь спрашивать. Мы всегда рады помочь!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Question