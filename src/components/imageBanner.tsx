import { Image, View,Text } from "react-native"

export function ImageHeader(){
    return(
        <View className="justify-center items-center mb-3">
            <Image source={require('../assets/image/semijoias.png')} className="h-48"/> 
        </View>
    )
}