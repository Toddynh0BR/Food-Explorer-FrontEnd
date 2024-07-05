import styled from "styled-components";

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: center;
gap: 4rem;
z-index: 10;

position: fixed;
top: 0;

width: 100%;
height: 9.6rem;
background-color: #00111A;

input {
 width: 58.1rem;
}

> div {
 display: flex;
 align-items: center;
 gap: 1rem;
}

button {
 height:  ${props => (props.isadmin ? '4.8rem' : '5.6rem')};
 width:21.6rem;
 margin-right: 3rem;
}

svg {
 font-size: 2.2rem;
 color: #FFFFFF;

}

#out {
    cursor: pointer;
}

@media(max-width: 750px){
 height: 11.4rem;
 
 gap: 0;

 button {
 display: none;
 }

 #out {
 display: none;
 }
}
`

export const Input = styled.div`
height: 4.8rem;
width: 58.1rem;

display: flex;
align-items: center;
justify-content: center ;
gap: 1rem;

padding: 1.2rem 5rem 1.2rem 13rem;
background-color: #0D1D25;
border-radius: .5rem;
svg {
 font-size: 2.3rem;
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

@media(max-width: 750px){
 display: none;
 width: 0;
 height: 0;
 padding: 0;

 input {
 display: none;
 }
 svg {
 display: none;
 }
}
`