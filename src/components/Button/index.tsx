import { Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";


interface IButton extends TouchableOpacityProps{
    text: string;
    variant?: 'primary' | 'secondary'
    style?: ViewStyle
}

const Button = ({text, style, variant = 'primary', ...rest}: IButton) => {
    return(
        <TouchableOpacity {...rest} style={[styles.container, style, { backgroundColor: variant === 'primary' ? theme.colors.primary : theme.colors.secondary}]}>
            <Text style={styles.textColor}>{text}</Text>
        </TouchableOpacity>
    )
}

export { Button };