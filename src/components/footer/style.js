import styled from "styled-components";

export const Container = styled.footer`
width: 100%;
height: 7.7rem;

margin-bottom: 0;

display: flex;
align-items: center;
justify-content: space-between;
background-color:${({ theme }) => theme.COLORS.DARK_600};
padding: 0 12.3rem ;

h2 {
 font-size: 2.4rem;
 font-weight: bold;
 color: ${({ theme }) => theme.COLORS.LIGHT_700};
}

p {
 font-size: 1.4rem;
 font-weight: 400;
 color: ${({ theme }) => theme.COLORS.LIGHT_200}
}

div {
 display: flex;
 align-items: center;
 gap: 1rem;
}

@media(max-width: 750px){
justify-content: center;
align-items: center;
width: 100%;
padding: 0;
gap: 3rem;

h2 {
 font-size: 1.5rem;
}
img {
width: 2.2rem;
height: 1.8rem;
}
div {
 gap: .5rem;
}
p {
 font-size: 1.2rem;
}
}
` 