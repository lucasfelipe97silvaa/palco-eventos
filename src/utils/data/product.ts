const THUMBNAIS = [
    {
        data:{
        thumbnail: require('../../assets/image/cor.png'),
        },
    },
    {
        data:{
        thumbnail: require('../../assets/image/afroFusion.png'),
        },
    }, 
    {
        data:{
        thumbnail: require('../../assets/image/22Boi.png'),
        },
    },
]

const EVENTS = THUMBNAIS.map((item)=> item.data).flat()

type ProductProps = (typeof THUMBNAIS )

export {THUMBNAIS, EVENTS, ProductProps}