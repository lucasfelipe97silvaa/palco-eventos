import React from "react";
import { Text, View, Image, Button } from "react-native";
import Logo from "../../assets/LogoPerfil.png";
import { Link } from 'expo-router';


export default function Perfil (){
    return (
        <View className="align-itens center justify-center ">
            <View>
                <Image source={Logo} className="w-20 h-20  rounded-full" alt="Rounded avatar" />
                <Text className="items-center justify-center text-black">Severino Cardozo</Text>

            
            </View>
            <View>
                <Button class=" bg-D4E2E5 text-#358198 rounded-lg"
                title="Editar perfil"/>
                 <Button class="rounded-lg text-#358198"
                 title="Favoritos"/>
            </View>
            <View>
                <Button 
                class="rounded-lg text-#358198"
                title="Histórico de ingressos"/>
            </View>
            <View>
                <Button
                class="rounded-lg text-#358198"
                title="Sair da conta"
                iconName="logout"
                /><Link href="/home"/>
            </View>
           
            
        </View>
    )
}