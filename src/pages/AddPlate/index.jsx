import { Container, Main, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { FiUpload, FiPlus, FiChevronDown, FiX } from "react-icons/fi";
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import { InputNumber } from 'primereact/inputnumber';

import { Return } from "../../components/returnButton";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";

export function AddPlate() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const [img, setImg] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState('refeiçao');
  const [newIngredient, setNewIngredient] = useState("");


  
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  function handleTags() {
    if (newIngredient.trim() !== "") {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveTag(index) {
    setIngredients(prevTags => prevTags.filter((_, i) => i !== index));
  }

  async function handleSave() {
    if (!img || !name || !price || !category || !description) {
      return   Toast.fire({
        icon: "warning",
        title: "Preencha todos os campos"
      });
    }



    const formData = new FormData();
    formData.append("file", img);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients));

    try {
      await api.post("/plates", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Toast.fire({
        icon: "success",
        title: "Prato criado com sucesso!"
      });
      navigate("/")
    } catch (error) {
      console.error("Erro ao enviar prato:", error);
      Toast.fire({
        icon: "error",
        title: "Preencha todos os campos"
      });
    }
};

  const isadmin = true;

  return (
    <Container>
      <Menu
        close={() => setMenu(false)}
        menu={menu}
        isadmin={isadmin}>
      </Menu>

      <Header
        isadmin={isadmin}
        open={() => setMenu(true)}
      ></Header>

      <Main>
        <Return></Return>
        <h2>Adicionar prato</h2>

        <Form>
          <div className="Row1">
            <div className="input-wrapper">
              <label>Imagem do prato</label>
              <div className="img">
                <input 
                  id="img"
                  type="file" 
                  accept="image/*" 
                  onChange={e => {
                    const file = e.target.files[0];
                    setImg(file);
                  }} 
                />
                <label htmlFor="img"><FiUpload /> Selecione a imagem</label>
              </div>
            </div>

            <div className="input-wrapper name">
              <label htmlFor="name">Nome</label>
              <div>
                <input 
                  id="name" 
                  type="text" 
                  autoComplete="off"
                  placeholder="Ex.: Salada Ceasar" 
                  onChange={e => setName(e.target.value)} 
                />
              </div>
            </div>

            <div className="input-wrapper category">
              <label htmlFor="category">Categoria</label>
              <div>
                <select 
                  id="category"
                  name="Categoria" 
                  onChange={e => setCategory(e.target.value)} 
                >
                  <option value="refeiçao">Refeição</option>
                  <option value="sobremesa">Sobremesa</option>
                  <option value="bebida">Bebida</option>
                </select>
                <FiChevronDown htmlFor="Categoria"/>
              </div>
            </div>
          </div>

          <div className="Row2">
            <div className="tagsArea">
              <label htmlFor="Tags">Ingredientes</label>
              <div className="Tags">
                {ingredients.map((ingredient, index) => (
                  <div className="TAG" key={String(index)}>
                    {ingredient}
                    <FiX onClick={() => handleRemoveTag(index)} />
                  </div>
                ))}

                <div className="ADD">
                  <input 
                    type="text"
                    autoComplete="off"
                    value={newIngredient}
                    placeholder="Adicionar" 
                    onChange={e => setNewIngredient(e.target.value)}
                  />      
                  <FiPlus onClick={handleTags}/>
                </div>
              </div>
            </div>

            <div className="input-wrapper">
              <label htmlFor="price">Preço</label>
              <div>
              <InputNumber 
               inputId="price" 
               mode="currency" 
               locale="en-US"
               currency="USD" 
               autoComplete="off"
               placeholder="R$ 00,00"
               onValueChange={(e) => setPrice(e.value)} 
                />
              </div>
            </div>
          </div>
          
          <div className="Row3">
            <div className="input-wrapper">
              <label htmlFor="description">Descrição</label>
              <div className="description">
                <textarea 
                  name="Descrição" 
                  id="description" 
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange={e => setDescription(e.target.value)} 
                ></textarea>
              </div>
            </div>
          </div>

          <div className="Row4">
            <Button
              title="Salvar"
              onClick={handleSave}
            ></Button>
          </div>
        </Form>
      </Main>

      <Footer>
      </Footer>
    </Container>
  );
}
