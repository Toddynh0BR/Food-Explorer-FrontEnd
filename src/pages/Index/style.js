import styled from "styled-components"

export const Container = styled.div`
`

export const Main = styled.main`
min-height: 100vh;
display: flex;
flex-direction: column;
gap: 2rem;

padding-top: 10rem;

h1 {
 font-family: 'Poppins', sans-serif;
 font-size: 4rem;
 font-weight: 500;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};

 margin-left: 11rem;
 margin-top: 1rem;
}

h3 {
 font-family: 'Poppins', sans-serif;
 font-size: 2.7rem;
 font-weight: 500;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
 opacity: .6;

 margin-left: 11rem;
}

@media(max-width: 750px) {
padding-top: 11rem;
min-height: 90vh;
h1, h3 {
 margin-left: 2rem;
}

h1 {
 font-size: 3rem;
 white-space: wrap;
}

h3 {
 font-size: 2rem;
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


@media(max-width: 750px) {
width: 100%;
margin-top: 0;
gap: 2rem;

}
`

export const Slide = styled.div`
position: relative;
width: 100%;

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


export const Return = styled.div`
display: flex;
align-items: center;

margin-top: 2rem;
margin-left: 11rem;
cursor: pointer;


&:hover{
 filter: brightness(80%);
}

svg {
 font-size: 3.2rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

span {
 font-family: 'Poppins', sans-serif;
 font-size: 2.4rem;
 font-weight: bold;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
}

@media (max-width: 750px){
 margin-left: 2rem;
}
`
