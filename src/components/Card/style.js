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

background-color: ${({ theme }) => theme.COLORS.DARK_200};
border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
border-radius: .8rem;


&:hover {
filter: brightness(135%);

}

.pencil {
 position: absolute;
 top: 1.5rem;
 right: 1.5rem;

 font-size: 3rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_400};
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
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
 margin-bottom: 1.5rem;
}

.description {
 width: 25.6rem;
 min-height: 4.4rem;
  
 font-size: 1.4rem;
 font-weight: 300;
 color: ${({ theme }) => theme.COLORS.LIGHT_400};
 margin-bottom: 1.5rem;

 overflow: hidden; 
 text-overflow: ellipsis;
 display: -webkit-box;
-webkit-line-clamp: 3; 
-webkit-box-orient: vertical;
}

span {
 font-size: 3.2rem;
 font-weight: 300;
 color: ${({ theme }) => theme.COLORS.ESPECIAL_200};
 margin-bottom: 1.5rem;
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
 padding-left: 0;
 }

 .description {
 display: none;
 }

 span {
 font-size: 1.6rem;
 margin-bottom: 1rem;
 }

button {
width: 16.2rem;
height: 3.2rem;
}
}

`


export const Configs = styled.div`

 display: ${props => (props.isadmin ? 'none' : 'flex')};
 align-items: center;
 gap: 1rem;

 @media(max-width: 750px){
 flex-direction: column;
 }
`