import hero_img from '../assets/main_hero.png'
import extra1 from '../assets/extra1.png'
import extra2 from '../assets/extra2.png'
import extra3 from '../assets/extra3.png'
import plant2 from '../assets/plant2.png'
import plant3 from '../assets/plant4.png'
import plant4 from '../assets/plant5.png'
import plant5 from '../assets/plant6.png'
import plant6 from '../assets/plant7.png'
import plant7 from '../assets/plant8.png'

import highlights from '../assets/highlight.png'
import featured from '../assets/featured.png'

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
      text: "Succulent plant Gardening Flower, plant, cactus, plants",
      btn: "Buy Now",
      img: extra3,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-green-500"
    },
    {
      id:"02",
      title:" Plant",
      text: "Leaf Palm branch, Potted green plants, green leafed plant and white plant pot, ",
      btn: "Buy Now",
      img: plant2,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-green-500"
    },
    {
      id:"03",
      title:"Snake plant",
      text: "in gray pot, Bonsai Flowerpot Template, Potted green plants, leaf, plant Stem ",
      btn: "Buy Now",
      img: plant3,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-green-500"
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
      shadow: "shadow-lg shadow-green-500"
    },
    {
      id:"02",
      title:"Houseplant ",
      text: "Tree Soil, plant, leaf, artificial Flower, palm Tree",
      btn: "Buy Now",
      img: plant5,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-green-500"
    },
    {
      id:"03",
      title:"Howes forsterite  ",
      text: "Ravened Areca palm Houseplant, potted plants, green leafed plant",
      btn: "Buy Now",
      img: plant6,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-green-500"
    },
    {
      id:"07",
      title:"Ravened Houseplant ",
      text: "Flower, potted plant, glass, leaf, plant Stem ",
      btn: "Buy Now",
      img: plant7,
      price:"1000",
      color:"from-green-600 to blue-500",
      shadow: "shadow-lg shadow-green-500"
    },
  ]
}




const highlight = {
  heading: "HIGHLIGHTS",
  title: "Create an indoor garden with variety of plants",
  text: "Do you have a dream garden in mind but can't seem to find the space to make this dream reality?",
  btn: "Explore More",
  url: "https://www.apartmenttherapy.com/15-indoor-garden-ideas-for-wannabe-gardeners-in-small-spaces-228575",
  img: highlights
};

const plant = {
  heading: "FEATURED",
  title: "Plants make a positive impact on your environment",
  text: "Provide your house & office space with the right plants and let our plant care team keep them flourishing",
  btn: "Explore More",
  url: "https://www.goldenarrow.com/blog/how-plants-help-environment#:~:text=Plants%20improve%20the%20environment%20in,to%20sustain%20life%20on%20Earth.",
  img: featured
};




export {hero_api,popularSales,topRates,highlight,plant}