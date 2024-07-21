import { Container, Main, Decoration, Plates, Slide } from "./style";
import { useState } from "react";

import Food from "../../assets/Food.png";

import { default as Slider } from "../../components/CardSlider";
import {  Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";


export function HomeAdmin(){
  const [menu, setMenu] = useState(false);
  const isAdmin = true;


    return(
        <Container>
          <Menu
          close={()=> setMenu(false)}
          menu={menu}
          isadmin={isAdmin}>
          </Menu>

          <Header
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
            type="sobremesa"
            isadmin={isAdmin}
            ></Slider>
           </Slide>
            <h3>Bebidas</h3>
            <Slide>
             <div className="sombra"></div>
            <Slider
            type="bebida"
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