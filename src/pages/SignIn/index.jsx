import { Container, Title, Form} from "./style";
import Polygon from "../../assets/Polygon1.svg";

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignIn(){
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const [Loading, setLoading] = useState(false)

 const { signIn } = useAuth();
 
 function HandleSignIn(){
    signIn({email, password});
    setLoading(true)
 }
 return(
  <Container>
   <Title>
    <img src={Polygon} alt="imagem de um poligono" />
    <h2>food explorer</h2>
   </Title>
   
 
   <Form>
    <h2>Faça login</h2>
    <Input
     title='Email'
     type="email"
     placeholder='Exemplo: exemplo@exemplo.com.br'
     onChange={e => setEmail(e.target.value)}
    ></Input>

    <Input
     title='Senha'
     type="password"
     placeholder='No mínimo 6 caracteres'
     onChange={e => setPassword(e.target.value)}
    ></Input>

    <Button 
     title='Entrar' 
     loading={Loading}
     onClick={ HandleSignIn }
     ></Button>
    <Link to="/SignUp">
    <span>Criar uma conta</span>
    </Link>
   </Form>
  
  </Container>  
 )
}