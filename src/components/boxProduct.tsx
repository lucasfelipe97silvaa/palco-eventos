import { View,Text, FlatList } from "react-native";
import { Product } from '../components/product'

export function BoxProduct(){
    return(
        <View className="ml-4">
            <View className=" w-96 h-48 bg-black mb-4">
                <Text className="text-white font-extrabold text-base text-left">
                    Produto
                </Text>
                <Product/>
            </View>
        </View>
    )
}