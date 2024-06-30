import styled from 'styled-components'



export const Container = styled.div`
height: 100%;
`

export const Main = styled.main`
height: 100%;
display: flex;
flex-direction: column;

padding-top: 10rem;

h2 {
font-family: 'Poppins', sans-serif;
font-size: 3.2rem;
font-weight: normal;
color: #E1E1E6;

margin-left: 12.5rem;
margin-top: 2rem;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 3.2rem;

width: 112.0rem;

margin: auto;
margin-top: 3rem;
margin-bottom: 10rem;

.input-wrapper {
 display: flex;
 flex-direction: column;
 gap: 1.6rem;

 label {
 font-size: 1.6rem;
 font-weight: normal;
 color: #C4C4CC;
 }

 div {
 height: 4.8rem;

 display: flex;
 align-items: center;

 background-color: #0D161B;
 border-radius: .8rem;
 padding: 1.2rem 3.2rem;
 cursor: pointer;
 &:hover {
 filter: brightness(80%);
 }

 }

 
}

input, textarea {
 border: none;
 background: none;
 outline: none;
 width: 100%;
 height: 100%;

 font-size: 1.6rem;
 font-weight: normal;
 color: #FFFFFF;
}

input::placeholder, textarea::placeholder {
 font-size: 1.6rem;
 font-weight: normal;
 color: #7C7C8A;
}

.Row1, .Row2, .Row3, .Row4 {
 display: flex;
 align-items: center;
 gap: 3.2rem;
}

.Row1 {
 display: flex;
 align-items: center;
 gap: 3.2rem;

 
#img {
 display: none;
}

.img {
 label {
 display: flex;
 align-items: center;
 gap: .8rem;

 font-family: 'Poppins', sans-serif;
 font-size: 1.4rem;
 color: #FFFFFF;
 cursor: pointer;

 svg {
 font-size: 2.4rem;
 color: #FFFFFF;
 }
 }
}

.name {
 div {
 width: 46.3rem;
}
}

.category {
 div {
 width: 35rem;
 padding: 0;
 position: relative;
 svg {
 z-index: 2;
 position: absolute;
 font-size: 2.3rem;
 color: #C4C4CC;
 right: 1.6rem;
 }
 select {
 width: 100%;
 background-color: #0D161B;
 border: none;
 outline: none;
 appearance: none;
 border-radius: 0;

 padding-left: 1.6rem;
 font-size: 1.4rem;
 font-weight: normal;
 color: #C4C4CC;
 }
 }

}

}

.Row2 {
 .tags {
 .Tags {
 padding: .4rem .8rem;
 gap: 1.6rem;
 width: 83.7rem;
 cursor: auto;

 .TAG {
 height: 3.2rem;

 white-space: nowrap;
 display: inline-block;

 display: flex;
 align-items: center;
 gap: .8rem;

 padding: 1rem 1.6rem;
 background-color: #76797B;
 border-radius: .8rem;
 cursor: pointer;
 &:hover {
 filter: brightness(120%);
 }
 
 font-size: 1.6rem;
 font-weight: 300;
 color: #FFFFFF;
 }

 .ADD {
 display: flex;
 align-items: center;
 gap: .8rem;
 height: 3.2rem;
 width: 12.2rem;

 border: 1px dashed #7C7C8A;
 padding: 1rem 1.6rem;

 svg {
 font-size: 1.6rem;
 color: #7C7C8A;
 }

 input {
 font-size: 1.6rem; 
 font-weight: 300;
 height: 1.6rem;
 padding: 0;
 &::placeholder {
 font-size: 1.6rem;
 font-weight: normal;
 color: #7C7C8A;
 }
 }
 }
 }
 }
}

.Row3 {
width: 100%;

.input-wrapper {
 .description {
 width: 112.0rem;
 height: 17.2rem;
 padding: 1.4rem 1.4rem;
 textarea {
 width: 100%;
 height: 100%;
 resize: none;
 }
 }
}
}

.Row4 {
 width: 100%;

 justify-content: flex-end;
    
button {
 background-color: #AB4D55;
 width: 17.2rem;
}
}
`