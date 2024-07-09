import { Container } from "./style";

import { FiMinus, FiPlus } from "react-icons/fi";
import React, { useState } from 'react';

export function Functions(){
    const [itens, setItens] = useState(0);
   
    function add() {
     setItens(itens + 1)
   }
   function remove() {
     if (itens > 0) {
       setItens(itens - 1)
     }
   }

    return(
        <Container>
        <div>
         <FiMinus onClick={remove}/>
         <strong id="itens">{String(itens).padStart(2, '0')}</strong>
         <FiPlus onClick={add}/>
        </div>
        </Container>
    )
}