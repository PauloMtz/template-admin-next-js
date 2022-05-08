import { IconeAjustes, IconeHome, IconeSino } from "../icones";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside>
            <ul>
                <MenuItem url="/" texto="Início" icone={IconeHome} />
                <MenuItem url="/configuracoes" texto="Configurações" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
        </aside>
    )
}