import { Image, View,Text, FlatList, Dimensions, StatusBar } from "react-native"



export  function ImageBanner(){
    return(
        <View className="justify-center items-center mb-3 h-40 ">       
           <Image source={require('../assets/image/semijoias.png')} className="h-48 rounded-sm"/>                    
        </View>
    )
}


// const { width, height} = Dimensions.get('screen')

// const data = [
//     'https://static.vecteezy.com/system/resources/previews/000/664/483/original/abstract-blue-banner-design-vector.jpg',
//     'https://static.vecteezy.com/ti/fotos-gratis/p2/22417269-arco-iris-iluminacao-fuga-para-realidade-series-abstrato-arranjo-do-surreal-por-do-sol-nascer-do-sol-cores-e-texturas-em-a-sujeito-do-panorama-pintura-imaginacao-criatividade-e-arte-generativo-ai-foto.jpg',
//     'https://static.vecteezy.com/system/resources/previews/001/236/889/original/rainbow-coloured-low-poly-banner-vector.jpg',
//     'https://static.vecteezy.com/ti/fotos-gratis/p2/22385466-abstract-banner-design-vector.jpg',
// ]

// const ImageW = width * 0.7; 
// const ImageH = height * 1.54;

//<Image source={require('../assets/image/semijoias.png')} className="h-48"/> 


{/* <FlatList
data={data}
horizontal={true}
keyExtractor={(_, index) => index.toString()}
renderItem={
    ({ item }) => (
        <View className="justify-center items-center">
            <Image source={{ uri: item }} style={{ 
                width: ImageW, 
                height: ImageH, 
                resizeMode: 'cover',
                borderRadius: 10
             }} />
        </View>
        )
   }
/> */}