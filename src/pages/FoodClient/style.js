import styled from "styled-components";

export const Container = styled.div`

@media (max-width: 750px){
max-width: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
}
`

export const Main = styled.main`
height: 100%;
display: flex;
flex-direction: column;

padding-top: 10rem;
@media (max-width: 750px){
 a {
 width: 31.6rem;
 margin: auto;
 margin-bottom: 2rem;
 div {
 margin-left: 0;
 }
 }
 justify-content: center;
 max-width: 100%;
margin-bottom: 10rem;
margin-top: 5rem;
}
`

export const Plate = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 4rem;

margin-top: 4rem;
margin-left: 11rem;

img {
 width: 39rem;
}

margin-bottom: 10rem;

@media(max-width: 750px){
flex-direction: column;
justify-content: center;
align-items: normal;
margin-left: 0;
margin: auto;
width: 31.6rem;

img {
 width: 26.4rem;
 margin: auto;
}
}

`

export const Info = styled.div`
display: flex;
flex-direction: column;

gap: 2.4rem;

width: 68.7rem;

div {
 display: flex;
 align-items: center;
 gap: 1.2rem;
}

h2{
 font-size: 4rem;
 font-weight: 400;
}
span {
 font-size: 2.4rem;
 font-weight: 300;
}
h2, span{
 font-family: 'Poppins', sans-serif;
 color: #E1E1E6;
}

@media(max-width: 750px){
width: 31.6rem;
text-align: center;

 h2 {
 font-size: 2.7rem;
}  
span {
 font-size: 1.6rem;
 width: 31.6rem;
}



.tags {
    width: 31.6rem;
    gap: 2.4rem;
    flex-wrap: wrap;
    justify-content: center;
    div {
    height: 3.2rem;
    }
}
}
`

export const Functions = styled.div`
margin-top: 2.4rem;

strong {
font-size: 2rem;
font-weight: bold;
color: #E1E1E6;
}
svg {
 font-size: 2rem;
 color: #FFFFFF;
 cursor: pointer;
}

button {
 width: 16.2rem;
 height: 4.8rem;
 padding: .5rem 1.5rem;

 margin-left: 3.3rem;
}

@media(max-width: 750px){
button {
 margin-left: 0;
 width: 18.8rem;
 height: 3.7rem;
}
strong {
 font-size: 2.2rem;
}
svg {
 font-size: 3rem;
 color: #FFFFFF;
 cursor: pointer;
}


div {
 width: 11.2rem;
}
}
`