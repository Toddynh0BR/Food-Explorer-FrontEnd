import { Container } from "./style";
import { Link, useNavigate } from "react-router-dom";

import { PiCaretLeft } from "react-icons/pi";


export function Return(){
 const navigate = useNavigate();
    
    return(
        <Link >
        <Container onClick={() => navigate(-1)}>
         <PiCaretLeft />
         <span>voltar</span>
        </Container>
        </Link>
    )
}