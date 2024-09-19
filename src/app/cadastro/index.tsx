import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../hooks/useAuth';
import { notify } from 'react-native-notificated';
import { theme } from '../../theme';
import { router } from 'expo-router';

const schema = z.object({
    nome: z.string({ message: 'Nome é obrigatório' }).min(3, 'Nome é obrigatório'),
    email: z.string({ message: 'Email é obrigatório' }).email('Email inválido'),
    cpf: z.string({ message: 'CPF é obrigatório' }).min(11, { message: 'CPF inválido' }),
    telefone: z.string({ message: 'Telefone é obrigatório' }),
    senha: z.string({ message: 'Senha é obrigatória' }).min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
    confirmarSenha: z.string({ message: 'Confirme sua senha' }).min(6, { message: 'Confirmação de senha é obrigatória' }),
}).refine(data => data.senha === data.confirmarSenha, {
    message: 'Senhas devem coincidir',
    path: ['confirmarSenha'],
});

type TCadastroForm = z.infer<typeof schema>;

const Cadastro = () => {
    const { cadastrar } = useAuth();
    const { control, formState: { errors }, handleSubmit } = useForm<TCadastroForm>({
        resolver: zodResolver(schema),
        mode: 'onBlur',
    });

    const onSubmit = async (data: TCadastroForm) => {
        const { cpf, email, nome, senha, telefone } = data;

        try {
            await cadastrar({ cpf, email, nome, senha, telefone });
            router.replace('/(tabs)/home');
        } catch (error) {
            notify('error', { params: { title: 'Erro', description: 'Falha ao cadastrar. Tente novamente.' } });
        }
    };

    const navigateToLogin = () => {
        router.replace('/login');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/image/LogoHome.png')}
                style={styles.logo}
            />

            <View style={styles.containerForm}>
                <Controller
                    control={control}
                    name='nome'
                    render={({ field: { value, onChange } }) => (
                        <Input
                            placeholder='Nome'
                            onChangeText={onChange}
                            value={value}
                            error={errors.nome?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='cpf'
                    render={({ field: { value, onChange } }) => (
                        <Input
                            placeholder='CPF'
                            onChangeText={onChange}
                            value={value}
                            error={errors.cpf?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='telefone'
                    render={({ field: { value, onChange } }) => (
                        <Input
                            placeholder='Telefone'
                            onChangeText={onChange}
                            value={value}
                            error={errors.telefone?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='email'
                    render={({ field: { value, onChange } }) => (
                        <Input
                            placeholder='Email'
                            onChangeText={onChange}
                            value={value}
                            error={errors.email?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='senha'
                    render={({ field: { value, onChange } }) => (
                        <Input
                            placeholder='Senha'
                            onChangeText={onChange}
                            value={value}
                            error={errors.senha?.message}
                            secureTextEntry
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='confirmarSenha'
                    render={({ field: { value, onChange } }) => (
                        <Input
                            placeholder='Confirmar Senha'
                            onChangeText={onChange}
                            value={value}
                            error={errors.confirmarSenha?.message}
                            secureTextEntry
                        />
                    )}
                />

                <Button
                    text='Cadastrar'
                    style={{ width: '100%' }}
                    onPress={handleSubmit(onSubmit)}
                />

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Já tem uma conta?
                        <Pressable onPress={navigateToLogin}>
                            <Text style={{ color: theme.colors.secondary }}> Faça Login</Text>
                        </Pressable>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Cadastro;
