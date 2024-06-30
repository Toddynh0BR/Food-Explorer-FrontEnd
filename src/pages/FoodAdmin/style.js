import styled from "styled-components";

export const Container = styled.div`
`

export const Main = styled.main`
height: 100%;
display: flex;
flex-direction: column;

padding-top: 10rem;
`

export const Plate = styled.div`
display: flex;
align-items: center;
gap: 4rem;

margin-top: 4rem;
margin-left: 11rem;

img {
 width: 39rem;
}

margin-bottom: 10rem;
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

button {
 width: 13.1rem;
 height: 4.8rem;
 padding: .5rem 1.5rem;

 margin-top: 2.4rem;
}
`