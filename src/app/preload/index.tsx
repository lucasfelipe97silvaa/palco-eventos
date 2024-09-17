import { View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { usuarioService } from '../../services/supabase/usuarioService';


const Preload = () => {
    const { setIsAuth, setUsuarioData } = useAuth();

    useEffect(() => {
        const getSessao = async () => {
            const result = await usuarioService.getSessao();

            if (result) {
                setIsAuth(true);
                setUsuarioData({ id: result.user.id, token: result.access_token });
                return router.replace('/(tabs)/home');
            }

            return router.replace('/login');
        }

        getSessao();
    }, []);


    return (
        <View>
            {/* Tela responsável por redirecionar o usuário para a home se estiver autenticado */}

        </View>
    )
}

export default Preload;