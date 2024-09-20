import { Image, Text, View } from "react-native";
import { IEvento } from "../../types/databaseTypes";

interface ISectionItemProps {
  data: IEvento;
}

const SectionItem = ({ data }: ISectionItemProps) => {
  return (
    <View className="mr-5 max-w-[128px]">
      <Image className="w-32 h-32" source={{ uri: data.imagem }} />

      <Text
        numberOfLines={1}
        className="text-ellipsis truncate ..."
      >
        {data.nome}
      </Text>
    </View>
  );
};

export { SectionItem };
