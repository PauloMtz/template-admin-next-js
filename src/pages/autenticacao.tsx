import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')

    return (
        <div>
            <h2>Página de autenticação</h2>

            <AuthInput label="E-mail" valor={email} tipo="email" 
                valorMudou={setEmail} obrigatorio />

            <AuthInput label="Senha" valor={senha} tipo="password" 
                valorMudou={setSenha} obrigatorio />
        </div>
    )
}