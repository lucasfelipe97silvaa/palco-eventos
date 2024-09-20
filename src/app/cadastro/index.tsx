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
import { utils } from '../../utils';

const schema = z.object({
    nome: z.string({ message: 'Nome é obrigatório' }).min(3, 'Nome é obrigatório'),
    email: z.string({ message: 'Email é obrigatório' }).email('Email inválido'),
    cpf: z.string({ message: 'CPF é obrigatório' }).length(11, { message: 'CPF deve ter 11 dígitos' }),
    telefone: z.string({ message: 'Telefone é obrigatório' }).min(10, { message: 'Telefone inválido' }),
    senha: z.string({ message: 'Senha é obrigatória' }).min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
    confirmarSenha: z.string({ message: 'Confirme sua senha' }).min(6, { message: 'Confirmação de senha é obrigatória' }),
}).refine(data => data.senha === data.confirmarSenha, {
    message: 'Senhas devem coincidir',
    path: ['confirmarSenha'],
});

type TCadastroForm = z.infer<typeof schema>;

const formatCpf = (cpf: string): string => {
    const cleanCpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (cleanCpf.length !== 11) return cleanCpf; // Retorna sem formatação se não tiver 11 dígitos
    return cleanCpf.replace(/(\d{3})(\d)/, '$1.$2')
                   .replace(/(\d{3})(\d)/, '$1/$2')
                   .replace(/(\d{2})$/, '-$1'); // Formata como 000.000.000-00
};

const formatTelefone = (telefone: string): string => {
    const cleanTelefone = telefone.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cleanTelefone.length < 10) return cleanTelefone; // Retorna sem formatação se menos de 10 dígitos
    return cleanTelefone.replace(/(\d{2})(\d)/, '($1) $2')
                        .replace(/(\d{4})(\d)/, '$1-$2'); // Formata como (00) 0000-0000
};

const Cadastro = () => {
    const { cadastrar } = useAuth();
    const { control, formState: { errors }, handleSubmit } = useForm<TCadastroForm>({
        resolver: zodResolver(schema),
        mode: 'onBlur',
    });

    const onSubmit = async (data: TCadastroForm) => {
        const { cpf, email, nome, senha, telefone } = data;

        const formattedCpf = formatCpf(cpf);
        const formattedTelefone = formatTelefone(telefone);

        try {
            await cadastrar({ cpf: formattedCpf, email, nome, senha, telefone: formattedTelefone });
            router.replace('/(tabs)/home');
        } catch (error: any) {
            notify('error', { params: { title: 'Erro', description: error.message } });
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
                            onChangeText={(text) => onChange(
                                text
                                    .toLowerCase()
                                    .split(' ')
                                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(' ')
                            )}
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
                            onChangeText={(text) => onChange(utils.formatCPF(text))}
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
                            onChangeText={(text) => onChange(utils.formatTelefone(text))}
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
