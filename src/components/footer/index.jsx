import { Container } from "./style";

import Polygon from "../../assets/Polygon3.svg"

export function Footer(){
 return(
    <Container>
        <div>
         <img src={Polygon} alt="imagem de um poligono" />
         <h2>food explorer</h2>
        </div>

        <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
 )
}