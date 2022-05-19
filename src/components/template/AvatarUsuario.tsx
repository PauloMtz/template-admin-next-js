import Link from "next/link"
import useAuth from "../../data/hooks/useAuth"
import imagem from "../../../public/images/avatar.svg"

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    return (
        <Link href="/perfil">
            <img
                src={usuario?.imagemUrl ?? imagem}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    )
}