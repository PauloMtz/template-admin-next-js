import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    cliqueAqui?: (evento: any) => void
    classeEstilo?: string 
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <a className={`
                flex flex-col justify-center items-center
                h-20 w-40 text-gray-600 dark:text-gray-200
                ${props.classeEstilo}
            `}>
                {props.icone}
                <span className={`text-xs font-light`}>
                    {props.texto}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.cliqueAqui} className={`
            hover:bg-gray-200 dark:hover:bg-gray-700
            cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )
}