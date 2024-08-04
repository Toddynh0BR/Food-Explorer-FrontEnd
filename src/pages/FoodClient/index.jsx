import { Container, Main, Plate, Info, Configs, Functions } from "./style";
import React, { useState, useEffect } from 'react';

import { useParams, useNavigate  } from 'react-router-dom';
import { api } from "../../services/api";

import { FiMinus, FiPlus } from "react-icons/fi";

import { Return } from "../../components/returnButton";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";
import { Tag } from "../../components/tags";

function formatPrice(price) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(price);
}

export function FoodClient(){
  const [plate, setPlate] = useState(null);
  const [menu, setMenu] = useState(false);
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState();
  const { id } = useParams();
  const isadmin = false;

  const navigate = useNavigate()

  async function fetchPlates() {
    try {
      const response = await api.post("/plates/show", { id });
      setPlate(response.data);
      setTotal(response.data.price)
    } catch (error) {
      console.error("Erro ao buscar prato: ", error);
    }
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

  function add() {
    setItems(prevItens => prevItens + 1);
    if (items >= 1){
    setTotal(prevItens => prevItens + plate.price)
    }
  }

  function remove() {
    if (items > 0) {
      setItems(prevItens => prevItens - 1);
    if (items >= 2){
        setTotal(prevItens => prevItens - plate.price)
    }
    }
  }

  useEffect(() => {
    fetchPlates();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!plate) {
   return <div>Prato não encontrado</div>;
  }

 return (
  <Container>
    <Menu
     close={()=> setMenu(false)}
     menu={menu}
     isadmin={isadmin}>
    </Menu>

    <Header
     isadmin={isadmin}
     open={() => setMenu(true)}
    />

    <Main>
    <Return class="return"/>

      <Plate>
      <img src={`${api.defaults.baseURL}/file/${plate.img}`} alt={`imagem de um prato com ${plate.name}`} />

        <Info>
          <h2>{plate.name}</h2>
          <span>{plate.description}</span>
          <div className="tags">
              {plate.ingredients.map((ingredient) => (
                <Tag key={ingredient.id} title={ingredient.name} onClick={()=> {
                  navigate(`/search/${ingredient.name}`)
                }}/>
              ))}
            </div>

          <Configs>
          <Functions>
           <div>
            <FiMinus onClick={remove}/>
            <strong id="items">{String(items).padStart(2, '0')}</strong>
            <FiPlus onClick={add}/>
           </div>
          </Functions>
            <Button
              title={`incluir ∙ ${formatPrice(total)}`}
              onClick={handleAddItems}
            ></Button>
          </Configs>

        </Info>

      </Plate>

    </Main>

    <Footer>
    </Footer>
  </Container>
);
 
}

