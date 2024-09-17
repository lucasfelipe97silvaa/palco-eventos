import { supabase } from "."

const getSessao = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    return session;
}

const login = async(email: string, senha: string) => {
    const {data, error } = await supabase.auth.signInWithPassword({
        email,
        password: senha
    });

    if(error){
        console.log('ERRO AO FAZER LOGIN!!', error);
        return error.message
    }

    return data;
}

const logout = async() => {
    const {error } = await supabase.auth.signOut();

    if(error){
        console.log('ERRO AO FAZER LOGOUT', error)
    }
}

export const usuarioService = {
    login,
    getSessao,
    logout
}