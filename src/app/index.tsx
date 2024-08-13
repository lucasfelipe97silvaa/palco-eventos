import {View, Text, ScrollView} from 'react-native'
import { Header } from '../components/header'
import { ImageHeader } from '../components/imageBanner'
import { BoxProduct } from '../components/boxProduct'


export default function Home(){
    return(
        <View> 
            <Header/>
            <ScrollView>
                <View> 
                    <ImageHeader/>
                    <BoxProduct />
                    <BoxProduct />
                    <BoxProduct />
                </View>
            </ScrollView>
        </View>
    )
} 
