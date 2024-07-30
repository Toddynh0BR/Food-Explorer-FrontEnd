import styled from "styled-components";

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: center;
gap: 4rem;
z-index: 10;

position: fixed;
top: 0;

width: 100%;
height: 9.6rem;
background-color: #00111A;

input {
 width: 58.1rem;
}

> div {
 display: flex;
 align-items: center;
 gap: 2rem;

 .extra {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    cursor: pointer;
  }

  .F {
    display: ${props => (props.isadmin ? 'none' : 'flex')};;
  }
}

&[data-open-favorites="true"]{
  div {
   .F {
    font-weight: 600;
   }
  }
}
&[data-open-historic="true"]{
  div {
   .H {
    font-weight: 600;
   }
  }
}

button {
 height:  ${props => (props.isadmin ? '4.8rem' : '5.6rem')};
 width:21.6rem;
}

svg {
 font-size: 3rem;
 color: #FFFFFF;
}

#out {
    cursor: pointer;
}

@media(max-width: 750px){
 height: 11.4rem;
 
 gap: 0;

 button {
 display: none;
 }

 .extra {
 display: none;
 }
 #out {
 display: none;
 }

 div {
   .F {
    display: none;
   }
  }
}
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 3.9rem;

  img {
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .title {
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  }
  .itens {
  display: none;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: #FFFFFF;
  }

  

  span {
    font-size: 1.2rem;
    font-weight: normal;
    color: #82F3FF;
    display: ${props => (props.isadmin ? 'flex' : 'none')};
  }

  svg {
  display: none;
  }

  @media (max-width: 750px){
    width: ${props => (props.isadmin ? '100%' : '31.6rem')};
    margin-top: 3rem;
    justify-content: ${props => (props.isadmin ? 'flex-start' : 'space-around')};

    align-items: center;
    div {
    flex-direction: row;
    }
    .title {
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: ${props => (props.isadmin ? '3rem' : '0')};
    }
    h2 {
     font-size: 2.1rem;
    }
    img {
    height: 2.4rem;
    width: 2.4rem;
    }
    svg {
    display: flex;
    color: white;
    width: 3rem;
    height: 2.4rem;
    cursor: pointer;
    margin-left: ${props => (props.isadmin ? '2rem' : '0')};
    }

    .itens {
    display: ${props => (props.isadmin ? 'none' : 'flex')};
    height: 3.8rem;
    width: 3.7rem;
    position: relative;
    svg {
    width: 3.2rem;
    height: 3.2rem;
    }
    strong {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
    background-color: #750310;
    border-radius: 99rem;
    padding: .01rem .4rem;

    position: absolute;
    top: 0;
    right: .5rem;
    }
    }
  }
`;

export const Input = styled.div`
height: 4.8rem;
width: 32rem;

display: flex;
align-items: center;
justify-content: center ;
gap: 1rem;

padding: 1rem;
background-color: #0D1D25;
border-radius: .5rem;
svg {
 font-size: 2.3rem;
 color: #C4C4CC;
}


input {
 width: 100%;

 border: none;
 background: none;
 outline: none;

 font-size: 1.6rem;
 font-weight: normal;
 color: #FFFFFF;

}
input::placeholder{
 font-size: 1.6rem;
 font-weight: normal;
 color: #7C7C8A;
}

@media(max-width: 750px){
 display: none;
 width: 0;
 height: 0;
 padding: 0;

 input {
 display: none;
 }
 svg {
 display: none;
 }
}
`