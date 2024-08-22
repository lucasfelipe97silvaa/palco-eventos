import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { GetShows } from '../../services/supabase/eventoService';
import { IEvento } from '../../types/databaseTypes';
import { Header } from '../../components/header';
import { ImageBanner } from '../../components/imageBanner';
import { BoxProduct } from '../../components/boxProduct';
import { useAuth } from '../../hooks/useAuth';


export default function Home() {
    const { isAuth } = useAuth();
    const [shows, setShows] = useState<IEvento[]>([]);


    useEffect(() => {
        async function fetchShows() {
            const data = await GetShows();
            setShows(data);
        }
        fetchShows();
    }, []);

    return (
        <View>
            <Header />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View>
                    <ImageBanner />
                    {
                        shows.map((show) => (
                            <BoxProduct key={show.id} title={show.nome} cover={show.imagem} />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
} 
