import { Container, Configs, Love, Functions } from "./style";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";

import { Button } from "../../components/button";

export function Card({ id, img, title, description, price, isadmin, plate_id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [items, setItems] = useState(0);
  const editRoute = `/editplate/${id}`;
  const route = `/plate/${id}`;

  async function checkIfFavorite() {
    try {
      const response = await api.post("/favorites/isfavorite", { plate_id: id });
      const data = response.data;
      setIsFavorite(data.Exist);
    } catch (error) {
      console.error("Erro ao verificar se o prato é favorito:", error);
    }
  };

  async function handleAddFavorite() {
    await api.post("/favorites/add",  { plate_id: id })
    setIsFavorite(true)
  };

  async function handleDeleteFavorite() {
    await api.delete(`/favorites/${id}`)
    setIsFavorite(false)
  };

  async function handleAddItems() {
    if(items == 0){
      return
    }
    try {
    await api.post("/orders");
    await api.post("/items", { plate_id: id, quantity: items });
    setItems(0)
    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel adicionar esté item ao pedido.")
      };
      setItems(0)
    }
  };

  useEffect(() => {
    checkIfFavorite();
  }, []);

   
  function add() {
    setItems(prevItens => prevItens + 1);
  }

  function remove() {
    if (items > 0) {
      setItems(prevItens => prevItens - 1);
    }
  }
  
  return (
    <Container isadmin={isadmin}>
      {isadmin && (
        <div className="pencil">
          <Link to={editRoute}>
            <PiPencilSimple className="edit" />
          </Link>
        </div>
      )}

      <Love isfavorite={isFavorite} isadmin={isadmin}>
        {isFavorite ? (
          <IoHeartSharp className="Love" onClick={handleDeleteFavorite}/>
        ) : (
          <IoHeartOutline className="noLove" onClick={handleAddFavorite}/>
        )}
      </Love>

      <Link to={route}>
        <img src={img} alt="imagem do prato" />
        <h2>{`${title}`}</h2>
        <p className="description">{description}</p>
        <span>{price}</span>
      </Link>

      <Configs isadmin={isadmin}>
        <Functions>
        <div>
         <FiMinus onClick={remove}/>
         <strong id="items">{String(items).padStart(2, '0')}</strong>
         <FiPlus onClick={add}/>
        </div>
        </Functions>
        <Button title="incluir" onClick={handleAddItems}/>
      </Configs>
    </Container>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isadmin: PropTypes.bool.isRequired,
  plate_id: PropTypes.number.isRequired,
};
