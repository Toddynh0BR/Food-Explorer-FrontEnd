import styled from "styled-components";

export const Container = styled.button`
 height: 100%;
 width: 100%;

 display: flex;
 align-items: center;
 justify-content: center;
 gap: .5rem;

 border: none;
 border-radius: .5rem;
 background-color: #750310;
 padding: 1.2rem 3.2rem;

 cursor: pointer;
 transition: .3s ease-in-out;
 &:hover {
 filter: brightness(80%);
 }

 &:disabled{
 filter: brightness(50%);
 }

 svg {
 font-size: 2.4rem;
 color: #FFFFFF;
 }

 p {
 font-size: 1.4rem;
 font-weight: 400;
 color: #FFFFFF;
 font-family: "Poppins", sans-serif;
 }
 `