import {View, Text, ScrollView} from 'react-native'
import { Header } from '../components/header'
import { ImageBanner } from '../components/imageBanner'
import { BoxProduct } from '../components/boxProduct'


export default function Home(){
    return(
        <View> 
            <Header/>
            <ScrollView  showsHorizontalScrollIndicator={false}>
                <View>
                    <ImageBanner/>
                    <BoxProduct title={"Shows"}/>
                    <BoxProduct title={"Festival"}/>
                    <BoxProduct title={"Stand-up"}/>
                </View>
            </ScrollView>
        </View>
    )
} 
