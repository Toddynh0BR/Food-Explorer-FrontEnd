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
}

h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 2.4rem;
 font-weight: bold;
}
p {
 font-size: 1.4rem;
 font-weight: 300;
 color: #C4C4CC;
}
span {
 font-size: 3.2rem;
 font-weight: 300;
 color: #82F3FF;
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
}
`