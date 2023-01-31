import hero_img from '../assets/mainhero.png'
import extra1 from '../assets/extra1.png'
import extra2 from '../assets/extra2.png'
import extra3 from '../assets/extra3.png'
import plant2 from '../assets/plant2.png'
import plant3 from '../assets/plant4.png'
import plant4 from '../assets/plant5.png'
import plant5 from '../assets/plant6.png'
import plant6 from '../assets/plant7.png'
import plant7 from '../assets/plant8.png'

import facebook from '../assets/facebook.svg'
import messenger from '../assets/messenger.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const hero_api = {
    title: "You can plant a dream.",
    subtitle: "I grow plants for many reasons",
    img: hero_img,
    btn_text: "Explore Our Product",
    img_extra: [
      { img_src: extra1 },
      { img_src: extra2},
      { img_src: extra3 },
    ],
    social_links: [
      { icon: facebook },
      { icon: messenger },
      { icon: instagram },
      { icon: twitter },
    ],
}

const popularSales = {
  title:"Popular Products",
  items:[
    {
      id:"01",
      title:"Succulent Plant",
      text: "Succulent plant Gardening Flower, plant, cactaceae, cactus, plants",
      btn: "Buy Now",
      img: extra3,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-blue-500"
    },
    {
      id:"02",
      title:"Arecaceae Plant",
      text: "Leaf Palm branch, Potted green plants, green leafed plant and white plant pot, ",
      btn: "Buy Now",
      img: plant2,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-blue-500"
    },
    {
      id:"03",
      title:"Snake plant",
      text: "in gray pot, Bonsai Flowerpot Template, Potted green plants, leaf, plant Stem ",
      btn: "Buy Now",
      img: plant3,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-blue-500"
    }
  ]
}

const topRates = {
  title: "Our Products",
  items: [
    {
      id:"01",
      title:"Green plant",
      text: "Flowerpot Houseplant Hanging basket, flower pot, grass, lawn",
      btn: "Buy Now",
      img: plant4,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-blue-500"
    },
    {
      id:"02",
      title:"Houseplant ",
      text: "Tree Soil, plant, leaf, artificial Flower, palm Tree",
      btn: "Buy Now",
      img: plant5,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-blue-500"
    },
    {
      id:"03",
      title:"Howea forsteriana  ",
      text: "Ravenea Areca palm Houseplant, potted plants, green leafed plant",
      btn: "Buy Now",
      img: plant6,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-blue-500"
    },
    {
      id:"07",
      title:"Ravenea Houseplant ",
      text: "Flower, potted plant, glass, leaf, plant Stem ",
      btn: "Buy Now",
      img: plant6,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-blue-500"
    },
  ]
}

export {hero_api,popularSales,topRates}