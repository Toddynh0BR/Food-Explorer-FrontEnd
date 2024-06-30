import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: .8rem;

label {
 font-size: 1.6rem;
 font-weight: normal;
 color: #C4C4CC;
}

input {
 width: 100%;

 border: none;
 background: none;
 outline: none;

 font-size: 1.6rem;
 font-weight: normal;
 color: #FFFFFF;

}
input::placeholder{
 font-size: 1.6rem;
 font-weight: normal;
 color: #7C7C8A;
}

&> div {
height: 4.8rem;
width: 100%;

display: flex;
align-items: center;
gap: .5rem;

padding: 1.2rem 1.4rem;
background-color: #0D1D25;
border-radius: .8rem;
}

svg {
 color: #C4C4CC;
}

div:focus-within {
 border: 1px solid #FFFFFF;
 background: transparent;
}
`