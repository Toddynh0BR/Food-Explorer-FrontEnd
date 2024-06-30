import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

export const Title = styled.div`
display: flex;
align-items: center;
gap: 2rem;

h2 {
 font-size: 4.2rem;
 font-weight: bold;
 color: #FFFFFF;
}
`

export const Form = styled.form`
width: 47.6rem;
margin-top: 3rem;

display: flex;
flex-direction: column;
align-items: center;
gap: 3.2rem;

padding: 6.4rem;
border-radius: 1.6rem;
background-color: #001119;

h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 3.2rem;
 font-weight: 400;
 color: #FFFFFF;
}

div {
 width: 35rem;
}

button {
 width: 35rem;
 height: 4.8rem;
}

span {
 font-family: 'Poppins', sans-serif;
 font-size: 1.4rem;
 font-weight: 400;
 color: #FFFFFF;

 cursor: pointer;
}
`

