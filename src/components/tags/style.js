import styled from "styled-components";

export const Container = styled.div`
height: 3.2rem;

display: flex;
align-items: center;
justify-content: center;

background-color: ${({ theme }) => theme.COLORS.DARK_1000};
border-radius: .5rem;
padding: .1rem .8rem .0rem .8rem;

cursor: pointer;
&:hover {
 filter: brightness(80%);
}

font-family: "Poppins", sans-serif;
font-size: 1.4rem;
font-weight: 400;
color: ${({ theme }) => theme.COLORS.LIGHT_100};


white-space: nowrap;
display: inline-block;
`
