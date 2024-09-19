import { useContext } from "react"
import { AuthContext } from "../contexts/Auth"


const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('Envolva a aplicação em um AuthContextProvider')
    }

    return context;
}

export { useAuth }