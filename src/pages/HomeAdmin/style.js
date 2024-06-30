import styled from "styled-components"

export const Container = styled.div`

`

export const Main = styled.main`
height: 100%;
display: flex;
flex-direction: column;

padding-top: 10rem;
`

export const Decoration = styled.div`
width: 112.0rem;
height: 26rem;

margin: auto;
margin-top: 17rem;
margin-bottom: 6rem;

display: flex;
align-items: center;

border-radius: .8rem;
background: rgb(0,19,28);
background: linear-gradient(0deg, rgba(0,19,28,1) 30%, rgba(9,30,38,1) 70%);

img {
z-index: 3;
margin-top: -12.8rem;
margin-left: -7rem;
}

div {
 display: flex;
 flex-direction: column;
 gap: .8rem;

 h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 4rem;
 font-weight: 500;
 color: #E1E1E6;
 }
 p {
 font-size: 1.6rem;
 font-weight: 300;
 color: #E1E1E6;
 }
}
`

export const Plates = styled.div`
width: 112.2rem;
margin: auto;
margin-bottom: 5rem;

display: flex;
flex-direction: column;
gap: 2.3rem;


h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 3.2rem;
 font-weight: 500;
 color: #E1E1E6;

}
`

export const Slide = styled.div`
position: relative;

h2 {
 font-size: 2.4rem;
}

.sombra {
 position: absolute;
 width: 100%;
 height: 100%;
 pointer-events: none;
 z-index: 2;
 box-shadow: inset 30px 0 50px -5px rgba(0, 10, 15, 0.8),
             inset -30px 0 50px -5px rgba(0, 10, 15, 0.8);
            
}
             

`
