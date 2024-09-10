import { StyleSheet } from "react-native";
import { theme } from "../../theme";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    logo:{
        width: 50,
        height: 50,
    },
    containerForm:{
        gap: 15,
        width: '75%'
    }
})

export { styles };