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
 background-color: ${({ theme }) => theme.COLORS.RED_100};
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
 font-size: 3rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
 }

 p {
 font-size: 1.4rem;
 font-weight: 400;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
 font-family: "Poppins", sans-serif;
 }
 `