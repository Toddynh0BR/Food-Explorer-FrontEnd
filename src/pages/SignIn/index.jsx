import { Container, Title, Form} from "./style";
import Polygon from "../../assets/Polygon1.svg";

import { Link } from "react-router-dom";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignIn(){
 return(
  <Container>
   <Title>
    <img src={Polygon} alt="imagem de um poligono" />
    <h2>food explorer</h2>
   </Title>
   
 
   <Form>
    <h2>Faça login</h2>
    <Input title='Email' placeholder='Exemplo: exemplo@exemplo.com.br' type="email"></Input>
    <Input title='Senha' placeholder='No mínimo 6 caracteres'></Input>
    <Button title='Entrar'></Button>
    <Link to="/SignUp">
    <span>Criar uma conta</span>
    </Link>
   </Form>
  
  </Container>  
 )
}