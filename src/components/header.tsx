import { Feather } from "@expo/vector-icons"
import { View, Text, Image } from "react-native"

export function Header(){
    return(
        <View className='flex-row items-center border-b border-slate-700 pb-5 mx-5 my-10 h-16'>
        <View className='flex-1'>
            <Image source={require('../assets/image/LogoHome.png')} className="h-10 w-10" />
        </View>
        <View className='mr-12'>
            <Text className='text-gray-400 font-medium '>
                    Aqui sera o input de Pesquisas
            </Text>
        </View>
        <View >
            <Feather name="menu" size={24} color={"#148797"}/>

        </View>
    </View>
    )
}