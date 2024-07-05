import { Container, Input } from "./style";

import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import { FiLogOut, FiSearch, FiMenu } from "react-icons/fi";
import Polygon2 from "../../assets/Polygon2.svg";
import { PiReceipt } from "react-icons/pi";

import { Button } from "../button";


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
  .title {
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  }
  .itens {
  display: none;
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

  svg {
  display: none;
  }

  @media (max-width: 750px){
    width: ${props => (props.isadmin ? '100%' : '31.6rem')};
    margin-top: 3rem;
    justify-content: ${props => (props.isadmin ? 'flex-start' : 'space-around')};

    align-items: center;
    div {
    flex-direction: row;
    }
    .title {
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: ${props => (props.isadmin ? '3rem' : '0')};
    }
    h2 {
     font-size: 2.1rem;
    }
    img {
    height: 2.4rem;
    width: 2.4rem;
    }
    svg {
    display: flex;
    color: white;
    width: 3rem;
    height: 2.4rem;
    cursor: pointer;
    margin-left: ${props => (props.isadmin ? '2rem' : '0')};
    }

    .itens {
    display: ${props => (props.isadmin ? 'none' : 'flex')};
    height: 3.8rem;
    width: 3.7rem;
    position: relative;
    svg {
    width: 3.2rem;
    height: 3.2rem;
    }
    strong {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
    background-color: #750310;
    border-radius: 99rem;
    padding: .01rem .4rem;

    position: absolute;
    top: 0;
    right: .5rem;
    }
    }
  }
`;

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
        <PiReceipt />
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







