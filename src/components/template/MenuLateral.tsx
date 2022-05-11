import { read } from "fs";
import { text } from "stream/consumers";
import { IconeAjustes, IconeHome, IconeLogout, IconeSino } from "../icones";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside className="flex flex-col">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-800
                h-20 w-40
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeHome} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem texto="Sair" icone={IconeLogout}
                    cliqueAqui={() => console.log("Clicou para sair")}
                    classeEstilo={`
                        text-red-600 hover:bg-red-600 hover:text-white
                    `} />
            </ul>
        </aside>
    )
}