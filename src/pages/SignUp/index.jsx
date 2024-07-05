import { Container, Title, Form} from "./style";
import Polygon from "../../assets/Polygon1.svg";

import { Link } from "react-router-dom";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignUp(){
 return(
  <Container>
   <Title>
    <img src={Polygon} alt="imagem de um poligono" />
    <h2>food explorer</h2>
   </Title>
   
 
   <Form>
    <h2>Crie sua conta</h2>
    <Input title='Seu nome' placeholder='Exemplo: Maria da Silva' type="text"></Input>
    <Input title='Seu Email' placeholder='Exemplo: exemplo@exemplo.com.br' type="email"></Input>
    <Input title='Senha' placeholder='No mínimo 6 caracteres'></Input>
    <Button title='Criar conta'></Button>
    <Link to="/Food-Explorer-FrontEnd/">
    <span>já tenho uma conta</span>
    </Link>
   </Form>
  
  </Container>  
 )
}