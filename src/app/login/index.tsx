import { View, Text, Image, Pressable, TextInput } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { StyleSheet } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const Login = () => {
    const { login } = useAuth();

    const navigateToCadastro = () => {
        router.navigate('/cadastro')
    }

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require('../../assets/image/LogoHome.png')} />

            <View>
                <Text style={styles.slogan}>Seu <Text style={styles.palco}>palco</Text> para{"\n"}
                    experiências <Text style={styles.incriveis}>incríveis</Text></Text>
            </View>


            <View style={styles.containerForm}>
                <Input
                    placeholder='Nome'
                />

                <Input
                    placeholder='Email'
                />

                <Button 
                text='Login'
                style={{ width: '100%' }}
                onPress={() => {}}
                />
                
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
        marginBottom: 30,
        marginTop: 100,
        textAlign: "center"
    },
    palco: {
        color: "#8F2F83"
    },
    incriveis: {
        color: "#158797"
    },
    containerForm: {
        gap: 15,
        width: '75%',
        
    }

    // cadastro:{
    //     marginTop: 20,
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },


})

export default Login;