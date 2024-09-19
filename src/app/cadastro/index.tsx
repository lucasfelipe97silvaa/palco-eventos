import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const Cadastro = () => {

    const cadastrar = () => {
        console.log('Cadastrar');
    }

    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/image/LogoHome.png')}
                style={styles.logo}
            />

            <View style={styles.containerForm}>

                <Input
                    placeholder='Nome'
                />
                <Input
                    placeholder='CPF'
                />
                <Input
                    placeholder='Telefone'
                />
                <Input
                    placeholder='Email'
                />
                <Input
                    placeholder='Senha'
                />
                <Input
                    placeholder='Confirmar Senha'
                />

                <Button
                    text='Cadastrar'
                    style={{ width: '100%' }}
                    onPress={cadastrar}
                />
            </View>


        </View>

    )
}

export default Cadastro;