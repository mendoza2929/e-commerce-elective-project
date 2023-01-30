import hero_img from '../assets/hero3.png'
import extra1 from '../assets/extra1.png'
import extra2 from '../assets/extra2.png'
import extra3 from '../assets/extra3.png'

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

export {hero_api}