import React from "react";
import { Text, View, Image, Button } from "react-native";
import Logo from "../../assets/LogoPerfil.png";
export default function Perfil (){
    return (
        <View className="align-itens center justify-center p-20  ">
            <View>
                <Image source={Logo}/>
                <Text className="items-center justify-center text-black">Severino Cardozo</Text>

            
            </View>
            <View>
                <Button 
                title="Editar perfil"/>
            </View>
            <View>
                 <Button 
                 title="Favoritos"/>
            </View>
            <View>
                <Button 
                title="Histórico de ingressos"/>
            </View>
            <View>
                <Button 
                title="Sair da conta"
                iconName="logout"
                />
            </View>
        </View>
    )
}