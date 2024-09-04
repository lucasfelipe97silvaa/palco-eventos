import {View, Text} from 'react-native'

export function Quantity(){

    return(
        <View className="flex-row justify-between w-max h-10 bg-slate-900" >
            <View>
                <Text>Title</Text>
            </View>
            <View>
                <Text>Quantidade:</Text>
            </View>
        </View>
    )
}