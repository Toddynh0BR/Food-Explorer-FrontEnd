import { Container, Main } from "./style";
import React, { useState, useEffect } from 'react';
import { api } from "../../services/api";

import Polygon2 from "../../assets/Polygon2.svg";
import { FaCircle } from "react-icons/fa";

import { Return } from "../../components/returnButton";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";

export function HistoricClient() {
  const [response, setOrders] = useState([]);
  const [menu, setMenu] = useState(false);
  const InHistoric = true;
  const isadmin = false;

  async function fetchOrders() {
      const Response = await api.post("/orders/historic");
      setOrders(Response.data.separateOrders);
  }

  useEffect(() => {
    fetchOrders();
    window.scrollTo(0, 0);
  }, []);


  let haveOrders
  if (response.length == 0) {
   haveOrders = false
  }else {
   haveOrders = true
  }


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Container>
      <Menu
       close={() => setMenu(false)}
       menu={menu}
       isadmin={isadmin}
      />
      
      <Header
        isadmin={isadmin}
        open={() => setMenu(true)}
        historic={InHistoric}
      />
      
      <Main>
        <Return />
        <h2>Pedidos</h2>
        <div className="table" data-orders-value={haveOrders}>
          <table>
            <thead>
              <tr>
                <th className="status">Status</th>
                <th className="code">Código</th>
                <th className="detals">Detalhamento</th>
                <th className="data">Data e hora</th>
              </tr>
            </thead>
            <tbody>
              {response.map(({ order, items }) => (
                <tr key={order.id} data-status={order.status}>
                  <td className="Status">
                    <div className="status_container">
                       <FaCircle /><p>{capitalizeFirstLetter(order.status)}</p> 
                    </div>
                  </td>
                  <td className="Code">
                    <p>{String(order.id).padStart(8, '0')}</p>
                  </td>
                  <td className="Details">
                    <p>{items.map(item => `${item.quantity} x ${item.plate_name}`).join(', ')}</p>
                  </td>
                  <td className="Data">
                    <p>{new Date(order.created_at).toLocaleString()}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="NoHistoric">
              <img src={Polygon2} alt="imagem de um poligono" />
              <h2>Nenhum pedido realizado ainda.</h2>
          </div>

        </div>

        <div className="mobalTable">
          {response.map(({ order, items }) => (
            <div className="order" key={order.id}>
              <div className="Row1">
                <p>{String(order.id).padStart(6, '0')}</p>

                <div className="select_container_mobal">
                  <FaCircle data-status={order.status}/><p>{capitalizeFirstLetter(order.status)}</p> 
                </div>

                <p>{new Date(order.created_at).toLocaleString()}</p>
              </div>

              <div className="Row2">
                <p>{items.map(item => `${item.quantity} x ${item.plate_name}`).join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </Main>

      <Footer />
    </Container>
  );
};
