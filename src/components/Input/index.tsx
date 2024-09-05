import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface IInputProps extends TextInputProps {
}

const Input = ({ ...rest}: IInputProps) => {
    return (
        <TextInput
            {...rest}
            style={styles.container}
         />
    );
}

export { Input };