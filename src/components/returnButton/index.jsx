import { Container } from "./style";
import { Link } from "react-router-dom";

import { PiCaretLeft } from "react-icons/pi";


export function Return(){
    return(
        <Link to="/Food-Explorer-FrontEnd/">
        <Container>
         <PiCaretLeft />
         <span>voltar</span>
        </Container>
        </Link>
    )
}