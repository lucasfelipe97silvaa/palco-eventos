import { View, Text, Image } from "react-native"

import { InputHeader } from "./inputComponents"

import { Feather } from "@expo/vector-icons"


// Header Component 
export function Header(){
    return(
        <View className=' flex-row bg-white items-center mx-5 h-16'>
            <View className='flex-1'>
                <Image source={require('../assets/image/LogoHome.png')} className="h-10 w-10" />
            </View>
            <View className='mr-20'>
                <InputHeader />
            </View>
            <View >
                <Feather name="menu" size={24} color={"#148797"}/>
            </View>
    </View>
    )
}