import { View, Text, ScrollView,Image } from "react-native";

type BoxProductProps = {
    title: string

}

export function BoxProduct({title}: BoxProductProps){
    return(
        <View className="ml-4">
            <View className=" w-96 h-48 bg-white mb-4">
                <Text className="text-black font-extrabold text-base text-left">
                   {title}
                </Text>
                <ScrollView horizontal> 
                    <View className="m-3">
                        <Image source={require('../assets/image/lolla.png')} className="w-32 h-32"/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}