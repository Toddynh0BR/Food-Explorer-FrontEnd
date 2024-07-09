import { Container, Input } from "./style";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import React from 'react';

import { FiX, FiSearch } from "react-icons/fi";
import { Footer } from "../footer"



export function Menu({isadmin, menu, close}){
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

      <div className="button">
        <p>Sair</p>
      </div>
     </main>

     <Footer />
    </Container>
 )
}

Menu.propTypes = {
  isadmin: PropTypes.bool.isRequired,
};