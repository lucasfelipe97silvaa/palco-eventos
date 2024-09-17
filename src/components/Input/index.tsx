import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

interface IInputProps extends TextInputProps {
    error?: string 
}

const Input = ({ error, ...rest}: IInputProps) => {
    return (
        <View>
            <TextInput
            {...rest}
            style={styles.container}
         />

         {error && <Text style={{color:'red'}}>{error}</Text>}
        </View>
    );
}

export { Input };