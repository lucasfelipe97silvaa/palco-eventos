import { ReactNode, createContext, useCallback, useState } from "react";
import { usuarioService } from "../services/supabase/usuarioService";
import { router } from "expo-router";
import { notify } from "react-native-notificated";

interface IAuthContext {
    isAuth: boolean;
    setIsAuth: (state: boolean) => void;
    login: (email: string, senha: string) => void;
    logout: () => void;
    usuarioData: IUsuarioData | null;
    setUsuarioData: (state: IUsuarioData) => void;
    cadastrar: (cadastroData: IRegisterParams) => Promise<void>;
}

interface IAuthContextProviderProps {
    children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

interface IUsuarioData {
    token: string;
    id: string;
}

interface IRegisterParams {
    email: string;
    senha: string;
    telefone: string;
    cpf: string;
    nome: string;
}

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [usuarioData, setUsuarioData] = useState<IUsuarioData | null>(null);

    const login = useCallback(async (email: string, senha: string) => {
        const authResult = await usuarioService.login(email, senha);

        if (typeof authResult !== 'string') {
            setUsuarioData({
                id: authResult.user.id,
                token: authResult.session.access_token,
            });
            setIsAuth(true);
            router.replace('/(tabs)/home');
            return;
        }

        const mensagemErro = authResult === 'Invalid login credentials'
            ? 'Email ou senha incorretos'
            : 'Tente novamente mais tarde';
        notify('error', {
            params: {
                title: 'Erro',
                description: mensagemErro,
            },
        });
    }, []);

    const logout = useCallback(async () => {
        await usuarioService.logout();
        setIsAuth(false);
        setUsuarioData(null);
        router.replace('/login');
    }, []);

    const cadastrar = useCallback(async (data: IRegisterParams) => {
        const { cpf, email, senha, telefone, nome } = data;

        const registerResult = await usuarioService.register(email, senha);

        if (typeof registerResult === 'string') {
            const mensagemErro = registerResult === 'User already registered'
                ? 'Usuário já existe'
                : 'Tente novamente mais tarde';
            notify('error', {
                params: {
                    title: 'Erro',
                    description: mensagemErro,
                },
            });
            return;
        }

        if (registerResult.user) {
            const usuarioResult = await usuarioService.create({
                cpf,
                id: registerResult.user.id,
                nome,
                telefone,
            });

            if (typeof usuarioResult === 'string') {
                notify('error', {
                    params: {
                        title: 'Erro ao fazer cadastro',
                        description: 'Tente novamente mais tarde',
                    },
                });
                return;
            }

            if (registerResult.session?.access_token) {
                setUsuarioData({
                    id: usuarioResult.id,
                    token: registerResult.session.access_token,
                });
                setIsAuth(true);
                router.replace('/(tabs)/home');
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            login,
            logout,
            usuarioData,
            setIsAuth,
            setUsuarioData,
            cadastrar,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContextProvider, AuthContext };
