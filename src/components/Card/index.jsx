import {  Container, Configs, Love } from "./style";

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { PiPencilSimple } from "react-icons/pi";

import { Button } from "../../components/button";
import { Functions } from "../functions";

export function Card({id, img ,title, description, price, isadmin, isfavorite}){
 const editRoute = `/editplate/${id}`
 const route = `/plate/${id}`

 return (
 
    <Container isadmin={isadmin}>

     
      <div className="pencil">
      <Link to={editRoute}>
       <PiPencilSimple className="edit"></PiPencilSimple>
       </Link>
      </div>
     

      <Love isfavorite={isfavorite} isadmin={isadmin}>
       <IoHeartOutline className="noLove"/>
       <IoHeartSharp className="Love"/>
      </Love>

      <Link to={route}>
        <img src={img} alt="imagem do prato" />
        <h2>{`${title}>`}</h2>
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
  isfavorite: PropTypes.bool.isRequired,
};