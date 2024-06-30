import { Container, Main, Decoration, Plates, Slide } from "./style";
import { PiReceiptBold } from "react-icons/pi";
import Food from "../../assets/Food.png";
import React, { useState } from 'react';

import {  Header } from "../../components/header";
import { default as Slider } from "../../components/CardSlider";
import { Footer } from "../../components/footer"


export function HomeClient(){
    const isAdmin = false;

    const ValuePedidos = 0;

    const pedidos = `Pedidos (${ValuePedidos})`;
   
    const [itens, setItens] = useState(0);
   

    return(
        <Container>
          <Header
         title={pedidos}
         icon={PiReceiptBold}
         isadmin={isAdmin}
         ></Header>

          <Main>

           <Decoration>
            <img src={Food} alt="imagem de comidas" />
            <div>
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
           </Decoration>
          
           <Plates>
            <h2>Refeições</h2>
           <Slide >
             <div className="sombra"></div>
            <Slider
            type="refeiçao"
            isadmin={isAdmin}
            ></Slider>
           </Slide>
            <h2>Sobremesas</h2>
            <Slide>
             <div className="sombra"></div>
            <Slider
            type="sobremesas"
            isadmin={isAdmin}
            ></Slider>
           </Slide>
            <h2>Bebidas</h2>
            <Slide>
             <div className="sombra"></div>
            <Slider
            type="bebidas"
            isadmin={isAdmin}
            ></Slider>
           </Slide>
           </Plates>
          </Main>
       
          <Footer>
          </Footer>
        </Container>
    )
}