import { View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { router } from 'expo-router';


const Preload = () => {
    const { isAuth } = useAuth();

    useEffect(() => {
        if (isAuth) {
            return router.replace('/(tabs)/home');
        }

        if (!isAuth) {
            return router.replace('/login');
        }
    }, [isAuth]);


    return (
        <View>
            {/* Tela responsável por redirecionar o usuário para a home se estiver autenticado */}

        </View>
    )
}

export default Preload;