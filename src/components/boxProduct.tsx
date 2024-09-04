import { View, Text, ScrollView,Image } from "react-native";
import { GetShows } from "../services/supabase/eventoService";
import { useEffect, useState } from "react";
import { IEvento } from '../types/databaseTypes'

type BoxProductProps = {
    title: string
    cover: string
}



export function BoxProduct({title, cover}: BoxProductProps){
    const [shows, setShows] = useState<IEvento[]>([]);

useEffect(() => {
    async function fetchShows(){
        const data  = await GetShows();
        setShows(data);
        // console.log(shows);
    }
    fetchShows();},[]);
    return(
        <View className="ml-4">
            <View className=" w-96 h-48 bg-white mb-4">
                <Text className="text-black font-extrabold text-base text-left">
                   categorias
                </Text>
                <ScrollView horizontal> 
                    <View className="m-3 flex-row gap-7 " >
                        {
                            shows.slice(0,3).map((show: IEvento) => (
                                <View key={show.id}>
                                    <Image source={{uri: show.imagem}} className="w-32 h-32"/>
                                    <Text>{show.nome}</Text>
                            </View>))
                        }
                        {/* <Image source={{uri:cover}} className="w-32 h-32"/> */}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}


{/* <Image source={require('../assets/image/lolla.png')} className="w-32 h-32"/> */}