import { createContext } from "react";

const AppContext = createContext({
    nome: null
})

export function AppProvider(props) {
    return (
        <AppContext.Provider value={{
            nome: "Context Provider API"
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
export const AppConsumer = AppContext.Consumer