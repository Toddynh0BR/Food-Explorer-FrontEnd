import { Container, Title, Form} from "./style";
import Polygon from "../../assets/Polygon1.png";

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
    <span>já tenho uma conta</span>
   </Form>
  
  </Container>  
 )
}