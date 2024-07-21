import { Container, Input } from "./style";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import React from 'react';

import { useAuth } from "../../hooks/auth";

import { FiX, FiSearch } from "react-icons/fi";
import { Footer } from "../footer"

export function Menu({isadmin, menu, close}){

  const { Logout } = useAuth();

 return(
    <Container isadmin={isadmin} data-menu-open={menu}>
     <header>
        <FiX onClick={close}></FiX>
        <h2>Menu</h2>
     </header>

     <main>
     <Input>
        <FiSearch />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </Input>

      <div className="button admin">
        <Link to="/addplate">
        <p>Novo prato</p>
        </Link>
      </div>

      <div className="button client">
       <Link to="/favorites">
        <p>Favoritos</p>
       </Link>
      </div>

      <div className="button">
       <Link to="/historic">
        <p>Histórico</p>
       </Link>
      </div>

      
      <div className="button" >
      <Link to="/">
        <p onClick={Logout}>Sair</p>
      </Link>
      </div>
     
     </main>

     <Footer />
    </Container>
 )
}

Menu.propTypes = {
  isadmin: PropTypes.bool.isRequired,
};