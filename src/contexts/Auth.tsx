import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { usuarioService } from "../services/supabase/usuarioService";
import { router } from "expo-router";
import { notify } from "react-native-notificated";

interface IAuthContext {
    isAuth: boolean;
    setIsAuth: (state: boolean) => void
    login: (email: string, senha: string) => void;
    logout: () => void;
    usuarioData: IUsuarioData | null
    setUsuarioData: (state: IUsuarioData) => void;
}

interface IAuthContextProviderProps {
    children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

interface IUsuarioData {
    token: string;
    id: string
}

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [isAuth, setIsAuth] = useState<boolean>(false); // booleano que indica se usuário está logado
    const [usuarioData, setUsuarioData] = useState<IUsuarioData | null>(null);

    const login = useCallback(async (email: string, senha: string) => {

        const authResult = await usuarioService.login(email, senha);

        if (typeof authResult !== 'string') {
            setUsuarioData({
                id: authResult.user.id,
                token: authResult.session.access_token
            })
            setIsAuth(true);
            router.navigate('/(tabs)/home')
        }

        const messageError = authResult === 'Invalid login credentials' ? 'Email ou senha incorretos' : 'Tente novamente mais tarde'
        console.log(authResult)
        notify('error', {
            params:{
                title: 'Erro',
                description: messageError
            }
        })
    }, [])

    const logout = useCallback(async() => {
        await usuarioService.logout();
        setIsAuth(false);
        setUsuarioData(null)
        router.navigate('/login')

    }, [])



    return (
        <AuthContext.Provider value={{
            isAuth,
            login,
            logout,
            usuarioData,
            setIsAuth,
            setUsuarioData
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext };