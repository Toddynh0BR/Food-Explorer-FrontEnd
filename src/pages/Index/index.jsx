import { Container, Main, Slide, Plates, Return } from "./style";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { PiCaretLeft } from "react-icons/pi";
import styled from "styled-components";


import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";
import { Card } from '../../components/Card'; 

const Styles = styled.main`
  width: 112.2rem;
  box-shadow: inset 50px 0 100px -5px ${({ theme }) => theme.COLORS.DARK_400},
              inset -50px 0 100px -5px ${({ theme }) => theme.COLORS.DARK_400};

  @media(max-width: 750px) {
    width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
  }
`;

function formatPrice(price) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(price);
}

export function Index() {
  const [slidesPerView, setSlidesPerView] = useState(3.5);
  const [navigation, setNavigation] = useState(true);
  const [menu, setMenu] = useState(false);
  const [plates, setPlates] = useState([]);
  const { index } = useParams();
  const isAdmin = false;
  
  async function fetchPlates() {
    try {
      const response = await api.post("/plates/search", { index });
      setPlates(response.data || []);

    } catch (error) {
      console.error("Erro ao buscar pratos: ", error);
      setPlates([]);
    }
  }
  
  useEffect(() => {
    fetchPlates();
  }, [index]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidesPerView(1.8);
        setNavigation(false);
      } else {
        setSlidesPerView(3.5);
        setNavigation(true);
      }
    }
  
    handleResize();
      window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <Menu
        close={() => setMenu(false)}
        menu={menu}
        isadmin={isAdmin}>
      </Menu>
      <Header
        isadmin={isAdmin}
        open={() => setMenu(true)}
      />
      <Main>

        <Link to="/">
         <Return>
          <PiCaretLeft />
          <span>voltar</span>
         </Return>
        </Link>
        <h1>Resultados para {index}</h1>
        {plates && plates.length === 0 ? (
        <h3>Nenhum resultado encontrado</h3>
        ) : (
        <p></p>
        )}

        <Plates>
         <Slide >
          <div className="sombra"></div>

          <Styles>
          {plates && plates.length === 0 ? (
            <h3></h3>
          ) : (
            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: true }}
              navigation={navigation}
            >
              {plates.map((plate) => (
                <SwiperSlide key={plate.id}>
                  <Card
                    id={plate.id}
                    img={`${api.defaults.baseURL}/file/${plate.img}`}
                    title={plate.name}
                    description={plate.description}
                    price={formatPrice(plate.price)}
                    isadmin={isAdmin}
                    isfavorite={true}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          </Styles>

         </Slide>
        </Plates>
      </Main>
      <Footer />
    </Container>
  );
}
