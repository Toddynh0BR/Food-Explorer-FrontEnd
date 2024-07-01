// Header.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Input } from "./style";
import Polygon2 from "../../assets/Polygon2.svg";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { Button } from "../button";

import { Link } from "react-router-dom";

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 3.9rem;

  img {
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: #FFFFFF;
  }

  span {
    font-size: 1.2rem;
    font-weight: normal;
    color: #82F3FF;
    display: ${props => (props.isadmin ? 'flex' : 'none')};
  }
`;

export function Header({ title, icon: Icon, isadmin }) {
let route = "#"
  if(isadmin == true){
    route = `/addplate`
  }else{
    route = "#"
  }

 return (
    <Container isadmin={isadmin}>
      <Title isadmin={isadmin}>
        <img src={Polygon2} alt="imagem de um polígono" />
        <div>
          <h2>food explorer</h2>
          <span>admin</span>
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







