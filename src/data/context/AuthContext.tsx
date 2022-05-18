import router from 'next/router'
import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'
import cookies from 'js-cookie'

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()

    return {
        id: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

function gerenciarCookie(logado: boolean) {
    if (logado) {
        cookies.set('admin-template-next-auth', logado, {
            expires: 1 // dias
        })
    } else {
        cookies.remove('admin-template-next-auth')
    }
}

export function AuthProvider(props) {
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [carregando, setCarregando] = useState(true)

    async function configurarSessao(usuarioFirebase) {
        if (usuarioFirebase?.email) {
            const usuarioSessao = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuarioSessao)
            gerenciarCookie(true)
            setCarregando(false)
            return usuarioSessao.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            if (resp.user?.email) {
                /*const usuarioLogin = await usuarioNormalizado(resp.user)
                setUsuario(usuarioLogin)*/
                configurarSessao(resp.user)
                router.push('/')
            }
        } finally {
            setCarregando(false)
        }
    }

    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        if (cookies.get('admin-template-next-auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext