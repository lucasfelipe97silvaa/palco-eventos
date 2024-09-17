import { Text, View } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../../components/Button';

const Perfil = () => {
    const { logout } = useAuth();

    return (
        <View>
            <Text>Perfil do cabra</Text>

            <Button
                text='Sair'
                variant='primary'
                onPress={() => logout()}
            />
        </View>
    );
}

export default Perfil;