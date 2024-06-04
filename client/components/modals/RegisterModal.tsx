'use client'

import useRegisterModal from "@/hooks/RegisterModalStore"
import { useState } from "react"
import Modal from "./Modal"
import Heading from "../UI/Heading"
import Input from "../UI/Input"
import { FcGoogle } from "react-icons/fc";
import useLoginModal from "@/hooks/LoginModalStore"

const RegisterModal = () => {

    const [isLoading, setIsLoading] = useState(false)
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const handleLogin = () => {
        registerModal.onClose()
        loginModal.onOpen()
    }

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        gender: '0',
        password: '',
        confirmPassword: '',
    })

    const body = (
        <div className="flex flex-col gap-4 h-fit">
            <Heading
            title="Добро пожаловать"
            subTitle="Заполните обязательную информацию для создания учетной записи."
            />

            <div className="flex gap-3">
                <Input
                placeholder="Имя"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                required
                />
                <Input
                placeholder="фамилия"
                value={form.surname}
                onChange={(e) => setForm({...form, surname: e.target.value})}
                required
                />
            </div>
            <div className="flex max-876:flex-col gap-3">
                <Input
                placeholder="Электронная почта"
                value={form.email}
                type="email"
                onChange={(e) => setForm({...form, email: e.target.value})}
                required
                />
                <Input
                placeholder="Номер телефона"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                required
                />
            </div>
            <div className="flex max-876:flex-col gap-3">
                <Input
                placeholder="Пароль"
                isPassword
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                required
                />
                <Input
                placeholder="Повторите пароль"
                isPassword
                value={form.confirmPassword}
                onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                required
                />
            </div>

            <div className="flex items-center gap-3 w-full">
                <button 
                onClick={() => setForm({...form, gender: '0'})}
                className={`w-full h-[45px] duration-300 rounded-xl border flex items-center justify-center text-xs 876:text-sm font-semibold
                ${form.gender === '0' ? 'bg-secondary text-white border-none' : 'bg-third text-third-dark border-third-dark'}`}>
                    Мужской
                </button>
                <button 
                onClick={() => setForm({...form, gender: '1'})}
                className={`w-full h-[45px] duration-300 rounded-xl flex items-center justify-center border text-xs 876:text-sm font-semibold
                ${form.gender === '1' ? 'bg-secondary text-white border-none' : 'bg-third text-third-dark border-third-dark'}`}>
                    Женщина
                </button>
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
            Уже есть аккаунт? <b onClick={handleLogin} className="cursor-pointer">Авторизоваться</b>
            </p>
        </div>
    )

  return (
    <Modal
        title='Регистр'
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        onSubmit={() => {}}
        actionLabel="Продолжать"
        disabled={isLoading}
        body={body}
        footer={footer}
    />
  )
}

export default RegisterModal