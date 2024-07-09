import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100%;

display: flex;
flex-direction: column;

background-color: ${({ theme }) => theme.COLORS.DARK_400};
position: fixed;

z-index: 100;
left: -100%;
&[data-menu-open="true"]{
 left: 0;
}

a {
 text-decoration: none;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
}

header {
 width: 100%;
 height: 11.4rem;

 display: flex;
 align-items: center;
 gap: 1.6rem;

 background-color: ${({ theme }) => theme.COLORS.DARK_600};
 padding-left: 1rem;
 padding-top: 7rem;

svg {
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
 font-size: 2.5rem;
}

h2 {
 font-size: 2.1rem;
 font-weight: 400;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
}
}

.admin {
 display: ${props => (props.isadmin ? 'flex' : 'none')};
}

main {
 width: 100%;
 flex: 1;
 margin-top: 4rem;
 padding: 1rem;

 display: flex;
 align-items: center;
 flex-direction: column;

 .button {
 width: 100%;
 height: 5.4rem;

 padding: 1rem;
 border-bottom: 0.5px solid ${({ theme }) => theme.COLORS.DARK_1000};
 border-width: thin;

 font-family: 'Poppins', sans-serif;
 font-size: 2.4rem;
 font-weight: lighter;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};

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
background-color: ${({ theme }) => theme.COLORS.DARK_900};
border-radius: .5rem;
svg {
 font-size: 2.3rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
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
 color: ${({ theme }) => theme.COLORS.LIGHT_700};
}

`