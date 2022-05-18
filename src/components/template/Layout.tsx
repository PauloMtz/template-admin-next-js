import Cabecalho from "./Cabecalho"
import MenuLateral from "./MenuLateral"
import Conteudo from "./Conteudo"
import useAppData from "../../data/hooks/useAppData"
import Autenticado from "../auth/autenticado"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {tema} = useAppData()

    return (
        <Autenticado>
            <div className={`${tema} flex h-screen w-screen`}>
                <MenuLateral />
                <div className={`
                    flex flex-col w-full p-7 
                    bg-gray-200 dark:bg-gray-800
                `}>
                    <Cabecalho
                        titulo={props.titulo}
                        subtitulo={props.subtitulo} />
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>
            </div>
        </Autenticado>
    )
}