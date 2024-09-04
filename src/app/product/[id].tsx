import { View, Image, Text } from "react-native";

import { useNavigation } from "expo-router";

import { Quantity } from "../../components/quantity";

export default function Eventos(){
    const navigation = useNavigation();
    return(

        <View>
            <View>
                <Image/> 
                <Text>Compartilhar</Text>
            </View>
            <View>
                <Text>Baile das VittarLover</Text>
                <View>
                    <Text>Data: 12/12/2022</Text>
                    <Text>19:00 horas</Text>
                </View>
                <Text>Localização</Text>
            </View>
            <Quantity/>
        </View>
    )
}