import { StyleSheet } from "react-native";
import { theme } from "../../theme";


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.primaryLight,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        borderRadius: 4,
        padding: 8,
        width: '100%',
        height: 40
    }
})

export { styles };