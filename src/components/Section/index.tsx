import { Image, View } from "react-native";
import { IEvento } from "../../types/databaseTypes";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { SectionItem } from "../SectionItem";


interface ISecion{
    title: string;
    data: IEvento[];
}

const Section = ({title, data}: ISecion) => {
    return(
        <View className="px-4">
            <Text className="text-black font-semibold mt-5 text-base text-left">{title}</Text>

            <ScrollView horizontal className="mt-1" showsHorizontalScrollIndicator={false}>
                {data.map(evento => (
                    <SectionItem key={evento.id} data={evento} />
                ))}
            </ScrollView>
        </View>
    )
}

export {Section}