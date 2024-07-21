import { Container, Main, Items, Pay, Input, Return } from "./style";
import React, { useState, useEffect } from 'react';
import { api } from "../../services/api";
import { Link } from "react-router-dom";

import { HiOutlineClock } from "react-icons/hi2";
import { PiReceiptLight, PiCheckCircle, PiCreditCard, PiForkKnife,  PiCaretLeft } from "react-icons/pi";

import Food from "../../assets/Mask group.png";
import qrcode from "../../assets/qrcode.png";
import pix from "../../assets/pix.svg";

import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";

export function Payment() {
  const [payment, setPayment] = useState("pix");
  const [mobal, setMobal] = useState("first");
  const [response, setResponse] = useState({});
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState(false);
  const isadmin = false;

  async function fetchOrders() {
    const response = await api.post("/orders/show");
    if (response && response.data) {
      setResponse(response.data);
      setOrders(response.data.order_items);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, [response]);

  const handleDeleteItem = async (orderItemId) => {
    await api.post("/items/delete", { order_id: response.id, order_item_id: orderItemId });
    
    const updatedOrders = orders.filter(order => order.id !== orderItemId);
    setOrders(updatedOrders);

    const updatedTotal = updatedOrders.reduce((sum, item) => sum + item.quantity * parseFloat(item.plate_price.replace(',', '.')), 0);
    setResponse(prevResponse => ({ ...prevResponse, total: updatedTotal.toFixed(2).replace('.', ',') }));
  };

  let Length = orders.length;
  let haveTotal = Boolean(response.total);

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
        ordersCount={Length} 
      />

      <Main>
      <Link to="/">
        <Return>
         <PiCaretLeft />
         <span onClick={async ()=> { await api.post("/orders")}}>voltar</span>
        </Return>
        </Link>

        <div className="PaymentArea">
          <Items data-total={haveTotal} data-mobal-status={mobal}>
            <h2>Meu pedido</h2>
            <div className="orders">
              {Length > 0 ? orders.map(item => (
                <div className="order" key={item.id}>
                  <img src={Food} alt="imagem de um prato de comida" />
                  <div className="plate">
                    <div className="info">
                      <span>{item.quantity}x {item.plate_name}</span>
                      <p>R${item.plate_price}</p>
                    </div>
                    <p className='delete' onClick={() => handleDeleteItem(item.id)}>Excluir</p>
                  </div>
                </div>
              )) : (
                <h3>Nenhum item adicionado ao pedido</h3>
              )}
            </div>
            <span className='total'>Total: R$ {response.total}</span>
            <div className="completeSpace"></div>
            <Button title="Avançar" onClick={() => setMobal("second")}></Button>
          </Items>

          <Pay data-status={response.status} data-payment-form={payment} data-mobal-status={mobal} data-total={haveTotal}>
            <h2>Pagamento</h2>
            <div className="payment">
              <div className="paymentForm">
                <div className="pix" onClick={() => setPayment("pix")}>
                  <img src={pix} alt="simbolo do pix" />
                  <p>Pix</p>
                </div>
                <div className="credit" onClick={() => setPayment("credit")}>
                  <PiCreditCard />
                  <p>Crédito</p>
                </div>
              </div>
              <div className="inPix">
                <img src={qrcode} alt="qrcode para pix" />
              </div>
              <div className="inCredit">
                <form>
                  <div className="input-wrapper">
                    <label htmlFor="CardNumber">Número do Cartão</label>
                    <Input
                      placeholder="0000 0000 0000 0000"
                      mask="9999 9999 9999 9999"
                      autoComplete="off"
                      id='CardNumber'
                      type="text"
                      maskChar=""
                    />
                  </div>

                  <div className="others">
                    <div className="input-wrapper">
                      <label htmlFor="Date">Validate</label>
                      <Input
                        placeholder="04/25"
                        autoComplete="off"
                        mask="99/99"
                        type="text"
                        maskChar=""
                        id='Date'
                      />
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="CVC">CVC</label>
                      <Input placeholder="000"
                        autoComplete="off"
                        type="text"
                        maskChar=""
                        mask="999"
                        id='CVC'/>
                    </div>

                  </div>

                  <Button 
                   icon={PiReceiptLight} 
                   title="Finalizar pedido" 
                   onClick={async () => {
                    setMobal("finish")
                    await api.put("/orders/", { orders_id: response.id, status: "pendente"})
                    fetchOrders();
                   }}>

                  </Button>
                </form>
              </div>
              <div className="pending">
                <HiOutlineClock />
                <h3>Aguardando pagamento no caixa</h3>
              </div>
              <div className="preparing">
                <PiCheckCircle />
                <h3>Pagamento aprovado!</h3>
              </div>
              <div className="delivered">
                <PiForkKnife />
                <h3>Pedido entregue!</h3>
              </div>
            </div>
          </Pay>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
