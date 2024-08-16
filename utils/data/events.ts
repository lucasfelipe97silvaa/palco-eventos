const MENU = [
    {
      data: [
        {
          id: "1",
          title: "Maiara e Maraisa",
          price: 239.90,
          description:
            "Venha curtir o melhor show das ilustres cantoras Maiara e Maraisa",
          cover: require(""),
          thumbnail: require(""),
        },
      ],
    },

    {
      data: [
        {
          id: "2",
          title: "Zé Neto e Cristiano",
          price: 179.99,
          description:
            "OOOO SOPFRÊNCIA!!! Venha curtir o show mais esperado do ano, Zé Neto e Cristiano estão chegando com tudo para animar a sua noite",
          cover: require(""),
          thumbnail: require(""),
        },

        {
          id: "3",
          title: "Thiago Ventura",
          price: 59.00,
          description:
            "Venha cair na gargalhada com as piadas e zueiras de THIAGO VENTURA",
          cover: require(""),
          thumbnail: require(""),
        },

        {
          id: "4",
          title: "Gio Lisboa",
          price: 64.99,
          description:
            "ELE MESMOO, Gio Lisboa está de volta na sua cidade para alegrar a sua noite",
          cover: require(""),
          thumbnail: require(""),
        },
      ],
    },
    {
      data: [
        {
          id: "5",
          title: "Sítio do Pica-Pau Amarelo",
          price: 14.99,
          description:
            "Venha curtir uma tarde agradável com o SÍTIO DO PICA-PAU AMARELO ",
          cover: require(""),
          thumbnail: require(""),
        },

        {
          id: "6",
          title: "Show acústico de Jorge Amaral",
          price: 0.00,
          description:
            "SHOW TOTALMENTE GRATUITO NA CONCHA ACUSTICA DE JORGE AMARAL",
          cover: require(""),
          thumbnail: require(""),
        },
      ],
    },
    {
      data: [
        {
          id: "7",
          title: "Palestra -  Coach PABLO MARÇAL",
          price: 199.90,
          description: "Pablo Marçal irá apresetar sua palestra sobre finanças as 20:30 da noite. Vocês não vão ficar de fora dessa né????",
          thumbnail: require(""),
          cover: require(""),
        },
      ],
    },
  ]
  
  const PRODUCTS = MENU.map((item) => item.data).flat()
  
//   const CATEGORIES = MENU.map((item) => item.title)
  
  type ProductProps = (typeof PRODUCTS)[0]
  
//   export { MENU, PRODUCTS, CATEGORIES, ProductProps }
  