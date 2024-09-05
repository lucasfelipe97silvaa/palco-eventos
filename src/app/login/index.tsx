import { View, Text, Image, Pressable } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { StyleSheet } from 'react-native';
import { router, useNavigation } from 'expo-router';

const Login = () => {
    const { login } = useAuth();

    const navigateToCadastro = () => {
        router.navigate('cadastro')
    }

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require('../../assets/image/LogoHome.png')} />

            <View>
                <Text style={styles.slogan}>Seu palco para{"\n"}
                    experiências incríveis</Text>
            </View>

            <View>
                <Text>Não tem uma conta? <Pressable onPress={navigateToCadastro}><Text>Cadastre-se</Text></Pressable></Text>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150,
        alignItems: "center"
    },
    logo: {

        alignItems: "center",
        justifyContent: "center"

    },
    slogan: {
        marginTop: 100,
        textAlign: "center"
    }
})

export default Login;