import { Container, Main, Plate, Info } from "./style";
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from "../../services/api";

import { Return } from "../../components/returnButton";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { Menu } from "../../components/menu";
import { Tag } from "../../components/tags";

function formatPrice(price) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(price);
}

export function FoodAdmin(){
  const { id } = useParams();
  const editRoute = `/editplate/${id}`;
  const [menu, setMenu] = useState(false);
  const [plate, setPlate] = useState(null);

  async function fetchPlates() {
    try {
      const response = await api.post("/plates/show", { id });
      setPlate(response.data);
    } catch (error) {
      console.error("Erro ao buscar prato: ", error);
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

  const isadmin = true;

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
      />
    
      <Main>
        <Return />
        <Plate>
          <img src={`${api.defaults.baseURL}/file/${plate.img}`} alt={`imagem de um prato com ${plate.name}`} />
          <Info>
            <h2>{plate.name}</h2>
            <span>{plate.description}</span>
            <div className="tags">
              {plate.ingredients.map((ingredient) => (
                <Tag key={ingredient.id} title={ingredient.name} />
              ))}
            </div>
            <Link to={editRoute}>
              <Button title="Editar prato" />
            </Link>
          </Info>
        </Plate>
      </Main>
      <Footer />
    </Container>
  );
}
