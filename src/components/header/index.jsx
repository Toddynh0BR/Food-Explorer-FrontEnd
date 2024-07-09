import { Container, Title, Input } from "./style";

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import React from 'react';

import { FiLogOut, FiSearch, FiMenu } from "react-icons/fi";
import Polygon2 from "../../assets/Polygon2.svg";
import { PiReceiptLight } from "react-icons/pi";

import { Button } from "../button";


export function Header({ mobaltitle ,title, icon: Icon, isadmin, open }) {
let route = "#"
  if(isadmin == true){
    route = `/addplate`
  }else{
    route = "#"
  }

 return (
    <Container isadmin={isadmin}>
      <Title isadmin={isadmin}>
        <FiMenu onClick={open}/>
        <div className="title">
        <img src={Polygon2} alt="imagem de um polígono" />
        <div>
          <h2>food explorer</h2>
          <span>admin</span>
        </div>
        </div>
        <div className="itens">
        <strong>
          {mobaltitle}
        </strong>
        <PiReceiptLight />
        </div>
      </Title>

      <Input>
        <FiSearch />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </Input>
      

      <div>
      <Link to={route}><Button icon={Icon} title={title} /></Link>
      <FiLogOut id="out"/>
      </div>
    </Container>
 );
}

Header.propTypes = {
  isadmin: PropTypes.bool.isRequired,
};







