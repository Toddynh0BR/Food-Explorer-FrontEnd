import { Container, Title, Input } from "./style";
import React, { useState, useEffect } from 'react';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import PropTypes from 'prop-types';

import { Link, useNavigate } from "react-router-dom";

import { FiLogOut, FiSearch, FiMenu } from "react-icons/fi";
import { PiReceiptLight, PiReceiptBold } from "react-icons/pi";

import Polygon2 from "../../assets/Polygon2.svg";
import { Button } from "../button";

export function Header({ isadmin, open, historic, favorites }) {
  const [response, setResponse] = useState({});
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const { Logout } = useAuth();


  async function fetchOrders() {
    if(!isadmin){
    const response = await api.post("/orders/show");
    
    if (response && response.data) {
      setResponse(response.data);
      setOrders(response.data.order_items);
    }else {
      setOrders("");
    }}
  }

  useEffect(() => {
    if(!isadmin){
    fetchOrders()
    };
  }, [response]);

  const ValuePedidos = orders.length;

  const title = isadmin ? "Novo prato" : `Pedidos (${ValuePedidos})`;
  const Icon = isadmin ? null : PiReceiptBold;

  const route = isadmin ? `/addplate` : "/payment";

  async function Search(event) {
    if (event.key === 'Enter') {
        navigate(`/search/${event.target.value}`);
    }
  };

  return (
    <Container isadmin={isadmin} data-open-favorites={favorites} data-open-historic={historic}>
      <Title isadmin={isadmin}>
        <FiMenu onClick={open} />
        <div className="title">
          <img src={Polygon2} alt="imagem de um polígono" />
          <div>
            <h2>food explorer</h2>
            {isadmin && <span>admin</span>}
          </div>
        </div>

        {!isadmin && (
          <Link to="/payment">
            <div className="itens">
              <strong>{ValuePedidos}</strong>
              <PiReceiptLight />
            </div>
          </Link>
        )}
      </Title>

      <Input>
        <FiSearch />
        <input 
         type="text" 
         placeholder="Busque por pratos ou ingredientes" 
         onKeyDown={Search}
         />
      </Input>

      <div>
        <Link to="/favorites">
          <h3 className="extra F">Meus Favoritos</h3>
        </Link>

        <Link to="/historic">
          <h3 className="extra H">Histórico de pedidos</h3>
        </Link>

        <Link to={route}>
          <Button icon={Icon} title={title} />
        </Link>

        <Link to="/">
          <FiLogOut id="out" onClick={Logout} />
        </Link>
      </div>
    </Container>
  );
}

Header.propTypes = {
  isadmin: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  historic: PropTypes.bool,
  favorites: PropTypes.bool,
};
