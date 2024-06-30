import {  Container, Functions } from "./style";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from "../../components/button";





export function Card({img ,title, description, price, isadmin}){
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
    <Container isadmin={isadmin}>
      <div className="pencil">
       <PiPencilSimple className="edit"></PiPencilSimple>
      </div>
        <img src={img} alt="imagem do prato" />
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{price}</span>

        <Functions isadmin={isadmin}>
        <div>
        <FiMinus onClick={remove}/>
        <strong id="itens">{String(itens).padStart(2, '0')}</strong>
        <FiPlus onClick={add}/>
        </div>
       <Button 
       title="incluir"
       ></Button>
       </Functions>

    </Container>
 )
}

Card.propTypes = {
  isadmin: PropTypes.bool.isRequired,
};