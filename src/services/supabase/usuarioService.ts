import { supabase } from "."

interface ICreateUsuario{
    id: string;
    nome: string;
    telefone: string;
    cpf: string;
}

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

const create = async(usuarioData: ICreateUsuario) => {
    const { cpf, id, nome, telefone} = usuarioData;

    const { data, error} = await supabase.from('usuario').insert({
        id,
        cpf,
        nome,
        telefone
    }).returns<ICreateUsuario>();

    if(error){
        console.log('ERRO AO CRIAR USUÀRIO', error);
        return error.message
    }

    return data;
}

const register = async(email: string, senha: string) => {

    const { error, data} = await supabase.auth.signUp({
        email,
        password: senha
    })

    if(error){
        console.log('ERRO AO FAZER CADASTRO', error);
        console.log(error.message)
        return error.message;
    }       

    return data;
}

export const usuarioService = {
    login,
    getSessao,
    logout,
    register,
    create
}