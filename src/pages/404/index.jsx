import { Container } from "./style";

import { Link } from "react-router-dom";

import { Button } from "../../components/button";

export function NotFound(){
    return(
        <Container>
            <h1>404</h1>
            <h2>Página não encontrada.</h2>
            <p>Pareçe que você se perdeu, para retornar ao nosso site, clique no botão abaixo</p>
            <Link to="/">
             <Button
               title="Retornar"
             ></Button>
            </Link>
        </Container>
    )
}