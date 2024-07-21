import { Container, Title, Form} from "./style";
import Polygon from "../../assets/Polygon1.svg";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignUp(){
const navigate = useNavigate();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


 const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
 };

 async function handleSignUp(){
  if(!name || !email || !password){
    return alert("Preencha todos os campos!")
  }
  if (password.length < 6) {
    return alert("Senha deve ter no mínimo 6 caracteres!")
  }
  if (!validateEmail(email)) {
    return alert('Email inválido!');
  }
  
  await api.post("/users/", {name, email, password})
  .then(()=> {
      alert("Usuário cadastrado com sucesso!")
      navigate("/");
       })
  .catch(error => {
    if(error.response){
      alert(error.response.data.message);
    }else {
      alert("Não foi possivel cadastrar o usuário.")
    }
  })
}
 return(
  <Container>
   <Title>
    <img src={Polygon} alt="imagem de um poligono" />
    <h2>food explorer</h2>
   </Title>
   
 
   <Form>
    <h2>Crie sua conta</h2>
    <Input 
    title='Seu nome'
    placeholder='Exemplo: Maria da Silva'
    type="text"
    onChange={e => setName(e.target.value)}
    ></Input>

    <Input
     title='Seu Email'
     placeholder='Exemplo: exemplo@exemplo.com.br'
     type="email"
     onChange={e => setEmail(e.target.value)}
    ></Input>

    <Input 
     title='Senha'
     type="password"
     placeholder='No mínimo 6 caracteres'
     onChange={e => setPassword(e.target.value)}
    ></Input>

    <Button
     title='Criar conta'
     onClick={handleSignUp}
    ></Button>

    <Link to="/">
    <span>já tenho uma conta</span>
    </Link>
   </Form>
  
  </Container>  
 )
}