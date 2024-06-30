import { Container, Main, Plate, Info } from "./style";
import { PiReceiptBold } from "react-icons/pi";

import Food from "../../assets/Mask group.png";

import {  Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Return } from "../../components/returnButton";
import { Button } from "../../components/button";
import { Tag } from "../../components/tags";

export function FoodAdmin(){
 const isAdmin = true;

 return (
    <Container>
      <Header
        title="Novo prato"
        isadmin={isAdmin}
      ></Header>
    
      <Main>
      <Return />
 
     <Plate>
      <img src={Food} alt="imagem de um prato com comida" />

      <Info>
       <h2>Salada Ravanello</h2>
       <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</span>
       <div>
        <Tag title="alface"/><Tag title="cebola"/><Tag title="pão naan"/><Tag title="pepino"/><Tag title="rabanete"/><Tag title="tomate"/>
       </div>
       <Button 
       title="Editar prato"
       ></Button>
      </Info>

     </Plate>
    
      </Main>

      <Footer>
      </Footer>
    </Container>
 );
}