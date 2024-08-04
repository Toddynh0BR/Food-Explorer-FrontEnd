import { Container, Main, Form } from "./style";
import React, { useEffect, useState } from 'react'; 
import { api } from "../../services/api";

import { useParams, useNavigate } from 'react-router-dom';
import { InputNumber } from 'primereact/inputnumber';
import Swal from 'sweetalert2'

import { FiUpload, FiPlus, FiChevronDown, FiX } from "react-icons/fi";

import { Return } from "../../components/returnButton";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";

function formatPrice(price) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(price);
}

export function EditPlate(){
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const isadmin = true;

  const [plate, setPlate] = useState(null);
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();

  const [oldIngredients, setOldIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([])

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

  async function fetchPlates() {
    try {
      const response = await api.post("/plates/show", { id });
      const data = response.data;
      setPlate(data);
      setImg(data.img)
      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
      setCategory(data.category);
      setOldIngredients(data.ingredients);
      
    } catch (error) {
      console.error("Erro ao buscar prato: ", error);
    }
  }

  useEffect(() => {
    fetchPlates();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleTags() {
    if (newIngredient.trim() !== "") {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  };

  function handleRemoveTag(index) {
    setIngredients(prevTags => prevTags.filter((_, i) => i !== index));
  };

  async function handleRemoveOldTag(ingredient_id) {
    try {
      await api.delete("/plates", {
        data: { ingredient_id }
      });
      fetchPlates();
    } catch (error) {
      console.error("Erro ao remover ingrediente: ", error);
    }
  };

  async function handleUpdate() {
  
    const formData = new FormData();

    if (img) formData.append("file", img);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    if(ingredients.length){
      formData.append("ingredients", JSON.stringify(ingredients));
    }

    try {
      await api.put(`/plates/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Toast.fire({
        icon: "success",
        title: "Prato atualizado com sucesso!"
      });
      navigate("/")
    } catch (error) {
      console.error("Erro ao enviar prato:", error);
      Toast.fire({
        icon: "error",
        title: "Erro ao atualizar prato"
      });
    }
  };

  async function handleDelete() {
    let confirmed = confirm("Tem certeza que deseja excluir este prato?");

    if(confirmed){
    await api.delete("/plates", {
      data: { plate_id: id }
    });
    Toast.fire({
      icon: "success",
      title: "Prato excluido com sucesso!"
    });
    navigate("/")
   }
  };

  async function handleTagsKey(event) {
    if (event.key === 'Enter') {
      if (newIngredient.trim() !== "") {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
      }
    }
  };

  if (!plate) {
    return <div>Prato não encontrado</div>;
  }

  return (
    <Container>
      <Menu
        close={() => setMenu(false)}
        menu={menu}
        isadmin={isadmin}
      />
      <Header
        isadmin={isadmin}
        open={() => setMenu(true)}
      />
      <Main>
        <Return />
        <h2>Editar prato</h2>
        <Form>
          <div class="Row1">
            <div class="input-wrapper">
              <label>Imagem do prato</label>
              <div class="img">
                <input 
                  type="file" 
                  accept="image/*" 
                  id="img"
                  onChange={e => {
                    const file = e.target.files[0];
                    setImg(file)
                  }}
                />
                <label For="img"><FiUpload /> Selecione a imagem</label>
              </div>
            </div>

            <div class="input-wrapper name">
            <label For="name">Nome</label>
            <div>
            <input 
             id="name"  
             type="text" 
             autoComplete="off"
             placeholder={plate.name}
             onChange={e => setName(e.target.value)}  
             />
            </div>
        </div>
            

        <div class="input-wrapper category">
            <label For="category">Categoria</label>
            <div>
            <select 
             id="category" 
             name="Categoria" 
             defaultValue={plate.category}
             onChange={e => setCategory(e.target.value)}
             >
                <option value="refeiçao">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
            </select>
            <FiChevronDown For="Categoria"/>
            </div>
        </div>

          </div>

          <div className="Row2">
            <div className="tagsArea">
              <label htmlFor="Tags">Ingredientes</label>
              <div className="Tags">
                {oldIngredients.map((ingredient) => (
                  <div className="TAG" key={ingredient.id}>
                    {ingredient.name}
                    <FiX onClick={() => handleRemoveOldTag(ingredient.id)} />
                  </div>
                ))}
                 {ingredients.map((ingredient, index) => (
                  <div className="TAG" key={index}>
                    {ingredient}
                    <FiX onClick={() => handleRemoveTag(index)} />
                  </div>
                ))}


                <div className="ADD">
                  <input 
                    type="text"
                    autoComplete="off"
                    placeholder="Adicionar" 
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onKeyDown={handleTagsKey}
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
               placeholder={formatPrice(plate.price)}
               onValueChange={(e) => setPrice(e.value)}  
                />
              </div>
            </div>
          </div>
         
          <div class="Row3">
            <div class="input-wrapper">
                <label For="description">Descrição</label>
                <div class="description">
                    <textarea 
                     name="Descrição" 
                     id="description" 
                     placeholder={plate.description}
                     onChange={e => setDescription(e.target.value)} 
                     ></textarea>
                </div>
            </div>
        </div>

          <div class="Row4">
           <button
            type="button" 
            className="excluir"
            onClick={(event) => {
              event.preventDefault();
              handleDelete();
            }}
           >
            Excluir prato
          </button>
            <Button
              title="Salvar alterações"
              className="salvar"
              onClick={handleUpdate}
            />
          </div>
        </Form>
      </Main>
      <Footer />
    </Container>
  );
}
