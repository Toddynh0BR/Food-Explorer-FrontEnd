import styled from "styled-components";
import image from "../../assets/404.png"

export const Container = styled.div`
height: 100vh;

gap: 1rem;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

background-image: url(${image});
background-repeat: no-repeat;
background-position: center;
background-size: 100vh;
padding-top: 5rem;

h1, h2, p {
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
 opacity: .8;
}

h1 {
 font-size: 28rem;
 line-height: 24rem;
}

h2 {
 font-size: 2rem;
 opacity: .6;
}

p {
 font-size: 1.2rem;
}

@media (max-width: 750px){
 text-align: center;

h1 {
 font-size: 20rem;
}

p {
 width: 30rem;
}
}
`