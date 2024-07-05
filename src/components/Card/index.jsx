import {  Container, Functions } from "./style";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { Button } from "../../components/button";





export function Card({id, img ,title, description, price, isadmin}){
 const [itens, setItens] = useState(0);
 const route = `/plate/${id}`
 const editRoute = `/editplate/${id}`

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
      <Link to={editRoute}>
      <div className="pencil">
       <PiPencilSimple className="edit"></PiPencilSimple>
      </div>
      </Link>
      <Link to={route}>
        <img src={img} alt="imagem do prato" />
        <h2>{title}</h2>
        <p className="p">{description}</p>
        <span>{price}</span>
      </Link>
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