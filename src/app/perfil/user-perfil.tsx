import React from "react";
import { Text, View, Image } from "react-native";
import Logo from "../../assets/LogoPerfil.png";
import { Link } from 'expo-router';
import { styles } from "./styles";
import { Button } from "../../components/Button";


const handleEditProfile = () =>{

console.log("Editar perfil");
};

export default function Perfil (){
    return (
        <View >
            <View>
                <Image source={Logo} />
                <Text style={styles.name}>Severino Cardozo</Text>
            </View>
            <View>
                <Button style={styles.button} 
                text="Editar perfil"
                onPress={handleEditProfile}> 
                </Button>
            </View>

            <View>
            <Button style={styles.button}
                 text="Favoritos">

            </Button>
            </View>

            <View>
                <Button style={styles.button}
                 text="Histórico de ingressos">
                 </Button>
            </View>

            <View>
                <Button style={styles.buttonLogout}
                 text="Sair da conta">
                {/* <Link href="/home"/> */}
                </Button>
            </View>
           
            
        </View>
    )
}

