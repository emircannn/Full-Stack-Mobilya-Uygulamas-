'use client'

import { useState } from "react"
import Modal from "./Modal"
import useRegisterModal from "@/hooks/RegisterModalStore"
import useLoginModal from "@/hooks/LoginModalStore"
import Input from "../UI/Input"
import Heading from "../UI/Heading"
import { FcGoogle } from "react-icons/fc"

const LoginModal = () => {

    const [isLoading, setIsLoading] = useState(false)
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const handleRegister = () => {
        loginModal.onClose()
        registerModal.onOpen()
    }

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const body = (
        <div className="flex flex-col gap-4 h-fit">
            <Heading
            title="Добро пожаловать"
            subTitle="Заполните необходимую информацию для входа."
            />

            <div className="flex flex-col gap-3">
                <Input
                placeholder="Электронная почта"
                value={form.email}
                type="email"
                required
                onChange={(e) => setForm({...form, email: e.target.value})}
                />
                <Input
                placeholder="пароль"
                value={form.password}
                isPassword
                required
                onChange={(e) => setForm({...form, password: e.target.value})}
                />
            </div>
            
        </div>
    )

    const footer = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <button className="w-full h-[40px] rounded-full border border-primary relative">
                <span className="p-1 absolute left-4 h-full top-0 flex items-center">
                <FcGoogle size={22}/>
                </span>

                <p className="text-primary font-semibold text-sm">Войти через Google</p>
            </button>

            <p className="text-xs 876:text-sm font-meidum text-third-dark text-center">
            У вас нет учетной записи? <b onClick={handleRegister} className="cursor-pointer">Регистр</b>
            </p>
        </div>
    )

  return (
    <Modal
        title="Авторизоваться"
        actionLabel="Продолжать"
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
        onSubmit={() => {}}
        disabled={isLoading}
        body={body}
        footer={footer}
    />
  )
}

export default LoginModal