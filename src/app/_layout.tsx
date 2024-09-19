import { Slot} from 'expo-router';
import { AuthContextProvider } from '../contexts/Auth';

const Layout = () => {

    return (
        <AuthContextProvider>
            <Slot />
        </AuthContextProvider>
    )
}

export default Layout;