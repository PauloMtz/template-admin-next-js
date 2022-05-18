import Image from 'next/image'
import Router from 'next/router'
import loading from '../../../public/images/carregando.gif'
import useAuth from '../../data/hooks/useAuth'

export default function Autenticado(props) {
    const {usuario, carregando} = useAuth()

    function renderizarConteudo() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} />
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        Router.push('/autenticacao')
        return null
    }
}