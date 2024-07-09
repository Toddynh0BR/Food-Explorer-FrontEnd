import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;


margin-top: 2rem;
margin-left: 12rem;
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
`
