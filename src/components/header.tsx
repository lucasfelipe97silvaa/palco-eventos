import { View, Text, Image } from "react-native";

import { InputHeader } from "./inputComponents";

import { Feather } from "@expo/vector-icons";

// Header Component
export function Header() {
  return (
    <View className=" flex-row items-center h-16 justify-between w-[100%] p-5 mt-8">
      <Image
        source={require("../assets/image/LogoHome.png")}
        className="h-10 w-10"
      />

      <InputHeader />
    </View>
  );
}
