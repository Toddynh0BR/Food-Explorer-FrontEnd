import {  Container, Configs } from "./style";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { Functions } from "../functions";
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
        <p className="description">{description}</p>
        <span>{price}</span>
      </Link>
        <Configs isadmin={isadmin}>    
        <Functions>
        </Functions>

        <Button 
        title="incluir"
       ></Button>
        </Configs>

    </Container>

 )
}

Card.propTypes = {
  isadmin: PropTypes.bool.isRequired,
};