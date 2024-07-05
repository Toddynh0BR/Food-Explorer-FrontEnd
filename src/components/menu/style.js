import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100%;

background-color: #000A0F;
position: fixed;
left: -100%;

z-index: 100;
&[data-menu-open="true"]{
 left: 0;
}

a {
 text-decoration: none;
 color:  #E1E1E6;
}

header {
 width: 100%;
 height: 11.4rem;

 background-color: #00111A;
 padding-top: 7rem;
}

.title {
 width: 36rem;
 margin: auto;

 display: flex;
 align-items: center;
 gap: 1.6rem;

svg {
 color: white;
 font-size: 2.5rem;
}

h2 {
 font-size: 2.1rem;
 font-weight: 400;
 color: white;
}
}

.admin {
 display: ${props => (props.isadmin ? 'flex' : 'none')};
}

main {
 width: 37.2rem;
 height: 71%;
 margin: auto;
 margin-top: 4rem;

 display: flex;
 flex-direction: column;

 .button {
 width: 100%;
 height: 5.4rem;

 padding: 1rem;
 border-bottom: 0.5px solid #192227;
 border-width: thin;

 font-family: 'Poppins', sans-serif;
 font-size: 2.4rem;
 font-weight: lighter;
 color: #E1E1E6;

 p {
 cursor: pointer;
 }
 }
}
`

export const Input = styled.div`
height: 4.8rem;
width: 100%;
margin-bottom: 3.6rem;

display: flex;
align-items: center;
gap: 1rem;
padding: 1.2rem 1.4rem;
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

`