import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Main } from "./style";
import { api } from "../../services/api";

import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Return } from "../../components/returnButton"
import { Menu } from "../../components/menu";

export function Favorites(){
  const [plates, setPlates] = useState({});
  const [menu, setMenu] = useState(false);
  const InFavorites = true;
  const isAdmin = false;

  function createRoute(id){
    const route = `/plate/${id}`
    return route
  }




    async function fetchFavorites() {
        const Response = await api.post("/favorites/show");
        setPlates(Response.data.separatePlates);
    }

    useEffect(() => {
      fetchFavorites();
    }, [plates]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const ValueFavorites = plates.length


    return (
        <Container>

          <Menu
           close={()=> setMenu(false)}
           menu={menu}
           isadmin={isAdmin}>
          </Menu>
          <Header
           isadmin={isAdmin}
           open={()=> setMenu(true)}
           favorites={InFavorites}
          ></Header>
          <Main data-have-favorites={ValueFavorites}>
          <Return></Return>
          <h2>Meus favoritos</h2>
          <h3>Nenhum prato adicionado aos favoritos ainda.</h3>
          <div className="Favorites">
                {Object.values(plates).map((plate) => (
                
                <div key={plate.id} className="Favorite">
                   <Link to={createRoute(plate.id)}>
                    <img src={`${api.defaults.baseURL}/file/${plate.img}`} alt="imagem do prato" />
                   </Link>
                 <div className="info">
                  <Link to={createRoute(plate.id)}>
                   <p>{plate.name}</p>
                  </Link>
                   <span onClick={async ()=> {
                       await api.delete(`/favorites/${plate.id}`)
                   }}>Remover dos favoritos</span>
                 </div>
                </div>
              ))}
 
          </div>
          </Main>

          <Footer></Footer>
        </Container>
    )
}