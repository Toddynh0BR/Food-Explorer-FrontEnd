import { React, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import Mask from "../../assets/Mask group.png";
import Mask1 from "../../assets/Mask group-1.png";
import Mask2 from "../../assets/Mask group-2.png";
import Mask3 from "../../assets/Mask group-3.png";
import Mask4 from "../../assets/Mask group-4.png";
import Mask5 from "../../assets/Mask group-5.png";
import Mask6 from "../../assets/Mask group-6.png";
import Mask7 from "../../assets/Mask group-7.png";
import Mask8 from "../../assets/Mask group-8.png";
import Mask9 from "../../assets/Mask group-9.png";
import Mask10 from "../../assets/Mask group-10.png";
import Mask11 from "../../assets/Mask group-11.png";



import { Card } from '../Card'; // Verifique se o caminho para o componente Card está correto


const Styles = styled.main`
width: 112.2rem;


  box-shadow: inset 50px 0 100px -5px #000A0F,
  inset -50px 0 100px -5px #000A0F;


@media(max-width: 720px){
  width: 37.6rem;
}
.swiper-button-prev,
.swiper-button-next {
 color: white; 
 z-index: 100;
}
`


function CardSlider({type, isadmin}){
  const [slidePerView, setSlidePerView] = useState(3.5)
  const [navigation, setNavigation] = useState(true)

 useEffect( ()=>{
 function handleResize(){
 if(window.innerWidth < 720){
  setSlidePerView(1.2)
  setNavigation(false)
 }else {
  setSlidePerView(3.5)
  setNavigation(true)
 }
 }

 handleResize()

 window.addEventListener('resize', handleResize)

 return () => {
 window.removeEventListener('resize', handleResize)
 }
 }, []) 


 const categories = {
  refeiçao: [
    {
      id: 1,
      title: 'Spaguetti Gambe >',
      image: Mask2,
      description: 'Massa fresca com camarões e pesto.',
      price: 'R$ 79,97',
    },
    {
      id: 2,
      title: 'Torradas de Parma >',
      image: Mask1,
      description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
      price: 'R$ 25,97',
    },
    {
      id: 3,
      title: 'Salada Molla >',
      image: Mask3,
      description: 'Massa fresca com camarões e pesto.',
      price: 'R$ 79,97',
    },
    {
      id: 4,
      title: 'Salada Ravanello >',
      image: Mask,
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      price: 'R$ 49,97',
    },
    {
      id: 5,
      title: 'Spaguetti Gambe >',
      image: Mask2,
      description: 'Massa fresca com camarões e pesto.',
      price: 'R$ 79,97',
    },
   
  ],
  sobremesas: [
    {
      id: 1,
      title: 'Prugna Pie >',
      image: Mask4,
      description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
      price: 'R$ 79,97',
    },
    {
      id: 2,
      title: 'Peachy pastrie >',
      image: Mask5,
      description: 'Delicioso folheado de pêssego com folhas de hortelã.',
      price: 'R$ 32,97',
    },
    {
      id: 3,
      title: 'Macarons  >',
      image: Mask6,
      description: 'Farinha de amêndoas, manteiga, claras e açúcar.',
      price: 'R$ 79,97',
    },
    {
      id: 4,
      title: 'Bolo de damasco  >',
      image: Mask7,
      description: 'Damascos frescos em uma massa sem glúten.',
      price: 'R$ 19,97',
    },
    {
      id: 5,
      title: 'Spaguetti Gambe >',
      image: Mask2,
      description: 'Massa fresca com camarões e pesto.',
      price: 'R$ 79,97',
    },

  ],
  bebidas: [
    {
      id: 1,
      title: 'Espresso >',
      image: Mask9,
      description: 'Café cremoso feito na temperatura e pressões perfeitas.',
      price: 'R$ 15,97',
    },
    {
      id: 2,
      title: 'Suco de maracujá >',
      image: Mask8,
      description: 'Suco de maracujá gelado, cremoso, docinho.',
      price: 'R$ 13,97',
    },
    {
      id: 3,
      title: "Tè d'autunno >",
      image: Mask10,
      description: 'Chá de anis, canela e limão. Sinta o outono italiano.',
      price: 'R$ 19,97',
    },
    {
      id: 4,
      title: 'Pomo bourbon  >',
      image: Mask11,
      description: 'Maçã, whisky, canela. On the rocks.',
      price: 'R$ 79,97',
    },
    {
      id: 5,
      title: 'Spaguetti Gambe >',
      image: Mask2,
      description: 'Massa fresca com camarões e pesto.',
      price: 'R$ 79,97',
    },

  ],
};
 
 const itemsToShow = categories[type] || []; 

  return (

  <Styles> 
    <Swiper
      slidesPerView={slidePerView} 
      spaceBetween={0} 
      loop={true}
      pagination={{ clickable: true }}
      navigation={navigation}
      >
      {itemsToShow.map((item) => (
        <SwiperSlide key={item.id} >
          <Card
            img={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            isadmin={isadmin}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Styles>
  );
};

export default CardSlider;
