'use client'

import Button from "@/components/UI/Button"
import Question from "./Question"
import useQuestionModal from "@/hooks/QuestionModalStore"

const Questions = () => {

  const questionModal = useQuestionModal()

  return (
    <div className="space-y-5">
        <p className="text-xs font-medium text-third-dark text-center">
        По этому товару пока не задано ни одного вопроса.
        </p>

        <div className="flex justify-center">
            <Button
                buttonName="Задавать вопрос"
                onClick={questionModal.onOpen}
            />
        </div>

        <div>
            <Question/>
        </div>
    </div>
  )
}

export default Questions