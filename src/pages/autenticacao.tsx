import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')

    function submeter() {
        if (modo === 'login') {
            console.log("Modo Login")
        } else {
            console.log("Modo Cadastro")
        }
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-1/2">
                <h1 className={`
                    text-xl font-bold mb-5
                `}>
                    {modo === 'login' ? 'Login' : 'Registre-se'}
                </h1>

                <AuthInput label="E-mail" valor={email} tipo="email" 
                    valorMudou={setEmail} obrigatorio />

                <AuthInput label="Senha" valor={senha} tipo="password" 
                    valorMudou={setSenha} obrigatorio />

                <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-4 mt-6
                `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={submeter} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-4
                `}>
                    Entre com sua conta do Google
                </button>
            </div>
        </div>
    )
}