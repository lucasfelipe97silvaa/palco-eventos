import { TextInput, View } from "react-native";

export function InputHeader(){
    return(
        <View className="border w-40 h-7" >
            <TextInput placeholder="Pesquisar..." className="items-center justify-center" />
        </View>
    )
}