import { Stack } from 'expo-router';
import { AuthContextProvider } from '../contexts/Auth';

const Layout = () => {
    return (
        <AuthContextProvider>
            <Stack />
        </AuthContextProvider>
    )
}

export default Layout;