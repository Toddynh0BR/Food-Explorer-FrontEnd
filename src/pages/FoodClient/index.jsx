import { Container, Main, Plate, Info, Functions } from "./style";
import { PiReceiptBold } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import React, { useState } from 'react';

import Food from "../../assets/Mask group.png";

import {  Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Return } from "../../components/returnButton";
import { Button } from "../../components/button";
import { Tag } from "../../components/tags";

export function FoodClient(){
 const isAdmin = false;
 const ValuePedidos = 0;

 const pedidos = `Pedidos (${ValuePedidos})`;

 const [itens, setItens] = useState(0);

 function add() {
  setItens(itens + 1)
}

function remove() {
  if (itens > 0) {
    setItens(itens - 1)
  }
}

 
 return (
    <Container>
      <Header
        title={pedidos}
        icon={PiReceiptBold}
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

       <Functions>
        <div>
        <FiMinus onClick={remove}/>
        <strong id="itens">{String(itens).padStart(2, '0')}</strong>
        <FiPlus onClick={add}/>
        </div>
       <Button 
       title="incluir ∙ R$ 25,00"
       ></Button>
       </Functions>

      </Info>

     </Plate>
    
      </Main>

      <Footer>
      </Footer>
    </Container>
 );
 
}

