import { Container, Main, Decoration, Plates, Slide } from "./style";
import { PiReceiptBold } from "react-icons/pi";
import Food from "../../assets/Food.png";
import React, { useState } from 'react';


import { default as Slider } from "../../components/CardSlider";
import {  Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";


export function HomeClient(){
    const [menu, setMenu] = useState(false);
    const isAdmin = false;

    const ValuePedidos = 0;
    const MobalPedidos = 0;

    const pedidos = `Pedidos (${ValuePedidos})`;
   
    const [itens, setItens] = useState(0);
   

    return(
        <Container>
          <Menu
          close={()=> setMenu(false)}
          menu={menu}
          isadmin={isAdmin}>
          </Menu>
          <Header
         mobaltitle={MobalPedidos}
         title={pedidos}
         icon={PiReceiptBold}
         isadmin={isAdmin}
         open={()=> setMenu(true)}
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
            <h3>Refeições</h3>
           <Slide >
             <div className="sombra"></div>
            <Slider
            type="refeiçao"
            isadmin={isAdmin}
            ></Slider>
           </Slide>
            <h3>Sobremesas</h3>
            <Slide>
             <div className="sombra"></div>
            <Slider
            type="sobremesas"
            isadmin={isAdmin}
            ></Slider>
           </Slide>
            <h3>Bebidas</h3>
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