import styled from "styled-components";

export const Container = styled.div`
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
color: ${({ theme }) => theme.COLORS.LIGHT_300};
}

svg {
 font-size: 2rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
 cursor: pointer;
}

`;