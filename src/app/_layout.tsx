import { Slot } from 'expo-router';
import { AuthContextProvider } from '../contexts/Auth';
import { createNotifications } from 'react-native-notificated'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const Layout = () => {
    const { NotificationsProvider } = createNotifications({
        defaultStylesSettings:{
            errorConfig:{
                leftIconSource: <AntDesign name="exclamationcircleo" size={24} color='red' />,
            }
        }
    });

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NotificationsProvider>
                <AuthContextProvider>
                    <Slot />
                </AuthContextProvider>
            </NotificationsProvider>
        </GestureHandlerRootView>
    )
}

export default Layout;