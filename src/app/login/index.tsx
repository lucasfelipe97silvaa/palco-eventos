import { View, Text, Image, Pressable, TextInput } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { StyleSheet } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { theme } from '../../theme';

const schema = z.object({
    email: z.string({ message: 'Campo obrigatório' }),
    senha: z.string({ message: 'Campo obrigatório' })
})

type TLoginForm = z.infer<typeof schema>

const Login = () => {
    const { login } = useAuth();

    const { handleSubmit, formState: { errors }, control, getFieldState } = useForm<TLoginForm>({
        resolver: zodResolver(schema)
    })


    const onSubmit = async (data: TLoginForm) => {
        await login(data.email, data.senha);
    }

    const navigateToCadastro = () => {
        router.replace('/cadastro')
    }

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require('../../assets/image/LogoHome.png')} />

            <View>
                <Text style={styles.slogan}>Seu <Text style={styles.palco}>palco</Text> para{"\n"}
                    experiências <Text style={styles.incriveis}>incríveis</Text></Text>
            </View>


            <View style={styles.containerForm}>
                <View>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field: { value, onChange } }) => {
                            return (
                                <Input
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder='Email'
                                    error={errors.email?.message}
                                />
                            )
                        }}
                    />
                </View>

                <View>
                    <Controller
                        control={control}
                        name='senha'
                        render={({ field: { value, onChange } }) => {
                            return (
                                <Input
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder='Senha'
                                    error={errors.senha?.message}
                                    secureTextEntry
                                />
                            )
                        }}
                    />
                </View>

                <Button
                    text='Login'
                    style={{ width: '100%' }}
                    onPress={handleSubmit(onSubmit)}
                />

            </View>

            <View>
                <Text>Não tem uma conta? <Pressable onPress={navigateToCadastro} ><Text style={{color: theme.colors.secondary}}>Cadastre-se</Text></Pressable></Text>
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