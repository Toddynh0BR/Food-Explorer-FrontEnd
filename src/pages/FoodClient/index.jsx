import { Container, Main, Plate, Info, Configs } from "./style";

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Functions } from "../../components/functions";
import { Return } from "../../components/returnButton";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";
import { Tag } from "../../components/tags";

import Mask from "../../assets/Mask group.png";
import Mask1 from "../../assets/Mask group-1.png";
import Mask2 from "../../assets/Mask group-2.png";
import Mask3 from "../../assets/Mask group-3.png";
import Mask4 from "../../assets/Mask group-4.png";
import Mask5 from "../../assets/Mask group-5.png";
import Mask6 from "../../assets/Mask group-6.png";
import Mask7 from "../../assets/Mask group-7.png";
import Mask8 from "../../assets/Mask group-8.png";
import Mask9 from "../../assets/Mask group-9.png";
import Mask10 from "../../assets/Mask group-10.png";
import Mask11 from "../../assets/Mask group-11.png";

export function FoodClient(){
  const [menu, setMenu] = useState(false);
  const { id } = useParams();
  const isadmin = false;

  const plates = [
    
    {
      id: 1,
      title: 'Spaguetti Gambe >',
      image: Mask2,
      description: 'Massa fresca com camarões e pesto.',
      price: 'R$ 79,97',
      tags: {
        tag1: "macarrão",
        tag2: "camarão",
        tag3: "manjericão",
      }
    },
    {
      id: 2,
      title: 'Torradas de Parma >',
      image: Mask1,
      description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
      price: 'R$ 25,97',
      tags: {
        tag1: "pão",
        tag2: "presunto",
        tag3: "rúcula",
      }
    },
    {
      id: 3,
      title: 'Salada Molla >',
      image: Mask3,
      description: 'Salada fresca e temperada.',
      price: 'R$ 79,97',
      tags: {
        tag1: "alface",
        tag2: "cebola",
        tag3: "pepino",
        tag4: "tomate",
        tag5: "básico",
      }
    },
    {
      id: 4,
      title: 'Salada Ravanello >',
      image: Mask,
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      price: 'R$ 49,97',
      tags: {
        tag1: "alface",
        tag2: "cebola",
        tag3: "pão naan",
        tag4: "pepino",
        tag5: "rabanete",
        tag6: "tomate"
  
      }
    },
    {
      id: 5,
      title: 'Prugna Pie >',
      image: Mask4,
      description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
      price: 'R$ 79,97',
      tags: {
        tag1: "ameixa",
        tag2: "açúcar",
        tag3: "amanteigada",
      }
    },
    {
      id: 6,
      title: 'Peachy pastrie >',
      image: Mask5,
      description: 'Delicioso folheado de pêssego com folhas de hortelã.',
      price: 'R$ 32,97',
      tags: {
        tag1: "pessego",
        tag2: "folheado",
        tag3: "hortelã",
      }
    },
    {
      id: 7,
      title: 'Macarons  >',
      image: Mask6,
      description: 'Farinha de amêndoas, manteiga, claras e açúcar.',
      price: 'R$ 79,97',
      tags: {
        tag1: "amêndoas",
        tag2: "manteiga",
        tag3: "ovo",
        tag4: "açúcar",
      }
    },
    {
      id: 8,
      title: 'Bolo de damasco  >',
      image: Mask7,
      description: 'Damascos frescos em uma massa sem glúten.',
      price: 'R$ 19,97',
      tags: {
        tag1: "damasco",
        tag2: "hortelã",
        tag3: "fresco",
        tag4: "0 gluten",
      }
    },
    {
      id: 9,
      title: 'Espresso >',
      image: Mask9,
      description: 'Café cremoso feito na temperatura e pressões perfeitas.',
      price: 'R$ 15,97',
      tags: {
        tag1: "café",
        tag2: "expresso",
        tag3: "básico",
        tag4: "cremoso"
      }
    },
    {
      id: 10,
      title: 'Suco de maracujá >',
      image: Mask8,
      description: 'Suco de maracujá gelado, cremoso, docinho.',
      price: 'R$ 13,97',
      tags: {
        tag1: "maracujá",
        tag2: "cremoso",
        tag3: "açúcar",
        tag4: "leite",
      }
    },
    {
      id: 11,
      title: "Tè d'autunno >",
      image: Mask10,
      description: 'Chá de anis, canela e limão. Sinta o outono italiano.',
      price: 'R$ 19,97',
      tags: {
        tag1: "anis",
        tag2: "canela",
        tag3: "limão",
      }
    },
    {
      id: 12,
      title: 'Pomo bourbon  >',
      image: Mask11,
      description: 'Maçã, whisky, canela. On the rocks.',
      price: 'R$ 79,97',
      tags: {
        tag1: "maçã",
        tag2: "whisky",
        tag3: "canela",
        tag4: "alcoolico",
      }
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plate = plates.find(p => p.id === Number(id));

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
        <img src={plate.image} alt={`imagem de um prato com ${plate.title}`} />

        <Info>
          <h2>{plate.title}</h2>
          <span>{plate.description}</span>
          <div className="tags">
          {Object.values(plate.tags).map((tag, index) => (
                <Tag key={index} title={tag} />
              ))}
          </div>

          <Configs>
            <Functions></Functions>
            <Button
              title={`incluir ∙ ${plate.price}`}
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

