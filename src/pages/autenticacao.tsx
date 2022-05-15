import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icones";
import useAuth from "../data/hooks/useAuth";

export default function Autenticacao() {
    const {usuario, loginGoogle} = useAuth()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [erro, setErro] = useState(null)

    function exibirMsgErro(msg, tempoSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoSegundos * 1000)
    }

    function submeter() {
        if (modo === 'login') {
            exibirMsgErro("Ocorreu um erro ao efetuar login", 2)
        } else {
            exibirMsgErro("Ocorreu um erro ao tentar cadastrar")
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="hidden md:block w-1/2 lg:2/3">
                <img src="https://source.unsplash.com/random" alt="Imagem"
                    className="h-screen w-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 m-10 lg:1/3">
                <h1 className={`
                    text-3xl font-bold mb-5
                `}>
                    {modo === 'login' ? 'Efetuar Login' : 'Cadastre-se no site'}
                </h1>

                {erro ? (
                    <div className={`
                        flex items-center bg-red-400 text-white py-3 px-5
                        border border-red-600 rounded-lg
                    `}>
                        {IconeAtencao()}
                        <span className="ml-2">{erro}</span>
                    </div>
                ) : false}

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

                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-4
                `}>
                    Entre com sua conta do Google
                </button>
                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui? 
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Cadastre-se</a> gratuitamente
                    </p>
                ) : (
                    <p className="mt-8">
                        Já sou ou cadastrado 
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Efetuar Login</a>
                    </p>
                )}
            </div>
        </div>
    )
}