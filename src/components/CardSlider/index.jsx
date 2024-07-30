import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import { api } from "../../services/api";

import { Card } from '../Card'; 

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

export function CardSlider({ type, isadmin }) {
  const [slidesPerView, setSlidesPerView] = useState(3.5);
  const [navigation, setNavigation] = useState(true);
  const [plates, setPlates] = useState([]);

  async function fetchPlates() {
    try {
      const response = await api.post("/plates/show");
      setPlates(response.data.plates);
    } catch (error) {
      console.error("Error fetching plates: ", error);
    }
  }

  useEffect(() => {
    fetchPlates();
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

  const itemsToShow = plates.filter(plate => plate.category === type);

  return (
    <Styles>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={navigation}
      >
        {itemsToShow.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              id={item.id}
              img={`${api.defaults.baseURL}/file/${item.img}`}
              title={item.name}
              description={item.description}
              price={formatPrice(item.price)}
              isadmin={isadmin}
              isfavorite={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles>
  );
}
