import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

@media(max-width: 750px){
 flex-direction: column;
 justify-content: center;
 padding-top: 10rem;
}
`

export const Title = styled.div`
display: flex;
align-items: center;
gap: 2rem;

h2 {
 font-size: 4.2rem;
 font-weight: bold;
 color:${({ theme }) => theme.COLORS.LIGHT_100};
}


@media(max-width: 750px){
 h2 {
 font-size: 3.7rem;
 }
 svg {
 width: 4.3rem;
 height: 4.67rem;
 }
}
`

export const Form = styled.form`
width: 47.6rem;
margin-top: 7rem;

display: flex;
flex-direction: column;
align-items: center;
gap: 3.2rem;

padding: 6.4rem;
border-radius: 1.6rem;
background-color: ${({ theme }) => theme.COLORS.DARK_700};

h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 3.2rem;
 font-weight: 400;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

div {
 width: 35rem;
}

button {
 width: 35rem;
 height: 4.8rem;
}

span {
 font-family: 'Poppins', sans-serif;
 font-size: 1.4rem;
 font-weight: 400;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};

 cursor: pointer;
}

@media(max-width: 750px){
 margin-top: 7rem;
 background: none;
 width: 31.6rem;
 padding: 0;
 gap: 3rem;
 div, button {
 width: 31.6rem;
 }
 h2 {
 display: none;
 }
}
`

