import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
gap: 1.5rem;
position: relative;

width: 30.4rem;
height: 46.2rem;


background-color: #00070A;
border: 1px solid #000204;
border-radius: .8rem;


&:hover {
filter: brightness(135%);

}

.pencil {
 position: absolute;
 top: 1.5rem;
 right: 1.5rem;

 font-size: 3rem;
 color: #E1E1E6;
 cursor: pointer;
 display: ${props => (props.isadmin ? 'flex' : 'none')};
}

img {
width: 17.6rem;
height: 17.6rem;
margin-bottom: 1.5rem;
}

h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 2.4rem;
 font-weight: bold;
 margin-bottom: 1.5rem;
}
p {
 font-size: 1.4rem;
 font-weight: 300;
 color: #C4C4CC;
 margin-bottom: 1.5rem;
}
span {
 font-size: 3.2rem;
 font-weight: 300;
 color: #82F3FF;
 margin-bottom: 1.5rem;
}

@media (max-width: 750px){
 width : 21rem;
 height: 29.2rem;
 gap: 1rem;

 .pencil {
 top: 1rem;
 right: 1rem;
 font-size: 2.5rem;
 }

 img {
 width: 8.8rem;
 height: 8.8rem;
 margin-bottom: 1rem;
 }

 h2 {
 font-size: 1.4rem;
 margin-bottom: 1rem;
 }

 .p {
 display: none;
 }

 span {
 font-size: 1.6rem;
 margin-bottom: 1rem;
 }
}
`


export const Functions = styled.div`

 display: ${props => (props.isadmin ? 'none' : 'flex')};
 align-items: center;
 gap: 1rem;

 div {
 display: flex;
 align-items: center;
 gap: 1rem;
}

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
 width: 9.2rem;
 height: 4.8rem;
 padding: .5rem 1.5rem;
 cursor: pointer;
 p {
 margin-bottom: 0;
 }
}

@media(max-width: 750px){
flex-direction: column;

button {
width: 16.2rem;
height: 3.2rem;
}
}
`