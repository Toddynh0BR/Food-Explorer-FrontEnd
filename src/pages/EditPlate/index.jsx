import { Container, Main, Form } from "./style";

import { FiUpload, FiPlus, FiChevronDown, FiX } from "react-icons/fi";
import React, { useEffect, useRef } from 'react';
import { Test } from "../../scripts/script.js"
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min.js';

import {  Header } from "../../components/header";
import { Return } from "../../components/returnButton";
import { Footer } from "../../components/footer"
import { Button } from "../../components/button";


export function EditPlate(){
const inputRef = useRef(null);

useEffect(() => {
    $(inputRef.current).mask("#.##0,00", {reverse: true}); // Exemplo de máscara para CPF
}, []);


 const isadmin = true;
 return(
    <Container>
     <Header
     title='Novo prato'
     isadmin={isadmin}
     ></Header>

     <Main>
     <Return></Return>
     <h2>Editar prato</h2>
   

     <Form>
        <div class="Row1">
        <div class="input-wrapper">
            <label>Imagem do prato</label>
            <div class="img">
            <input type="file" accept="image/*" id="img"/>
            <label For="img"> <FiUpload /> Selecione a imagem</label>
            </div>
        </div>

        <div class="input-wrapper name">
            <label For="name">Nome</label>
            <div>
            <input type="text" id="name" placeholder="Salada Ceasar" autoComplete="off"/>
            </div>
        </div>

        <div class="input-wrapper category">
            <label For="category">Categoria</label>
            <div>
            <select name="Categoria" id="category">
                <option value="Refeição">Refeição</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Bebida">Bebida</option>
            </select>
            <FiChevronDown For="Categoria"/>
            </div>
        </div>
        </div>

        <div class="Row2">
            <div class="input-wrapper tags">
                <label For="Tags">Ingredientes</label>
                <div class="Tags">
                    <div class="TAG">Pão Naan <FiX/> </div>
                    <div class="ADD"><input type="text" placeholder="Adicionar" /><FiPlus/></div>
                </div>
            </div>

            <div class="input-wrapper">
                <label For="price">Preço</label>
                <div>
                <input
                 id="price"
                 ref={inputRef}
                 type="text"
                 placeholder="R$ 00,00"
                />
                </div>
            </div>

        </div>
        
        <div class="Row3">
            <div class="input-wrapper">
                <label For="description">Descrição</label>
                <div class="description">
                    <textarea name="Descrição" id="description" placeholder="A Salada César é uma opção refrescante para o verão."></textarea>
                </div>
            </div>
        </div>

        <div class="Row4">
            <button
             onClick={Test}
            class="excluir"
            >Excluir prato</button>
            <Button
            title="Salvar alterações"
            class="salvar"
            ></Button>
        </div>
     </Form>
     </Main>


     <Footer>
     </Footer>
    </Container>
 )
}