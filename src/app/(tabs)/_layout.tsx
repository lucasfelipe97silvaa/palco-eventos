import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "../../theme";


const LayoutTabs = () => {
    return (
        <Tabs screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: theme.colors.primary, tabBarInactiveTintColor: theme.colors.gray}}>
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="favoritos/index"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color, focused }) =>  <FontAwesome size={28} color={color} name="heart" />,
                }}
            />

            <Tabs.Screen
                name="perfil/index"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default LayoutTabs;