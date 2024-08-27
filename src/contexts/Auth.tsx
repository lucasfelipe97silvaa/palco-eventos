import { ReactNode, createContext, useState } from "react";

interface IAuthContext {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}

interface IAuthContextProviderProps {
    children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [isAuth, setIsAuth] = useState<boolean>(true); // booleano que indica se usuário está logado

    const login = () => {
        // função para fazer login
        setIsAuth(true);
    }

    const logout = () => {
        // função para fazer logout
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{
            isAuth,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext };