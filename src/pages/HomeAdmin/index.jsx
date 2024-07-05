import { Container, Main, Decoration, Plates, Slide } from "./style";
import { useState } from "react";

import Food from "../../assets/Food.png";

import {  Header } from "../../components/header";
import { default as Slider } from "../../components/CardSlider";
import { Footer } from "../../components/footer"
import { Menu } from "../../components/menu";


export function HomeAdmin(){
    const isAdmin = true;
    const MobalPedidos = 0;
    const [menu, setMenu] = useState(false);

    return(
        <Container>
          <Menu
          close={()=> setMenu(false)}
          menu={menu}
          isadmin={isAdmin}>
          </Menu>

          <Header
          mobaltitle={MobalPedidos}
          title="Novo prato"
          isadmin={isAdmin}
          open={()=> setMenu(true)}>
          </Header>

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