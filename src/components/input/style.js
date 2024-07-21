import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

gap: .8rem;


label {
 font-size: 1.6rem;
 font-weight: normal;
 color: ${({ theme }) => theme.COLORS.LIGHT_400};
}

input {
 width: 100%;

 border: none;
 background: none;
 outline: none;

 font-size: 1.6rem;
 font-weight: normal;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
}
input::placeholder{
 font-size: 1.6rem;
 font-weight: normal;
 color: ${({ theme }) => theme.COLORS.LIGHT_800};
}

&> div {
height: 4.8rem;
width: 100%;

display: flex;
align-items: center;
gap: .5rem;

padding: 1.2rem 1.4rem;
color: ${({ theme }) => theme.COLORS.DARK_900};
background-color: ${({ theme }) => theme.COLORS.DARK_900};
border-radius: .8rem;
}

svg {
 color: ${({ theme }) => theme.COLORS.LIGHT_400};
}

div:focus-within {
 border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
 background: transparent;
}
`