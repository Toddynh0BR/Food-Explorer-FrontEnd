import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const Main = styled.main`
width: 106.8rem;
min-height: 100vh;

margin: auto;
margin-top: 11rem;

a {
div {
 margin-left: 0;
}
}

h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 3.2rem;
 font-weight: 600;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};

 margin-top: 2rem;
 margin-bottom: 2rem;
}

h3 {
 display: none;
}

.Favorites {
 width: 106.8rem;
 margin: auto;

 display: grid;
 grid-template-columns: repeat(4, 23.1rem);
 gap: 4.8rem;

 .Favorite {
 height: 10rem;
 
 display: flex;
 align-items: center;
 gap: 1.3rem;

 img {
 width: 7.2rem;
 height: 7.2rem;

 }
 .info {
 padding: 0;
 display: flex;
 flex-direction: column;
 gap: 0;
 p {
 font-family: 'Poppins', sans-serif;
 font-size: 1.4rem;
 font-weight: 400;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
 }
 span {
 font-size: 1rem;
 font-family: 400;
 color: ${({ theme }) => theme.COLORS.RED_400};
 cursor: pointer;
 }
 }
 }
}

&[data-have-favorites="0"]{
h3 {
 display: flex;
 font-family: 'Poppins', sans-serif;
 font-size: 1.6rem;
 font-weight: 500;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
 opacity: .6;
}
}

@media (max-width: 750px){
 width: 100%;
 padding-left: 2rem;
 h3 {
 width: 30rem;
 font-size: 1.2rem;
 }
 .Favorites {
    width: 23.1rem;
    margin: 0;
    
    display: flex;
    flex-direction: column;
    gap: 0;
}
}
`