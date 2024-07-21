import InputMask from 'react-input-mask';
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

export const Main = styled.div`
width: 113.2rem;
height: 100%;

margin: auto;
margin-top: 10rem;
margin-bottom: 10rem;

display: flex;
flex-direction: column;
gap: 2rem;

a {
div {
 margin-left: 0;
}
}

.PaymentArea {
 width: 100%;

 display: flex;
 justify-content: space-between;
 gap: 5rem;
}

h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 3.2rem;
 font-weight: 500;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
}

@media (max-width: 750px){
 width: 100%;
 height: 80vh;
 margin-bottom: 5rem;
 }
`

export const Items = styled.div`
 width: 44.4rem;

 display: flex;
 flex-direction: column;
 gap: 2rem;

 h3 {
 opacity: 0;
 }

 .order {
 width: 40.3rem;
 height: 10.4rem;

 display: flex;
 align-items: center;
 gap: 1.3rem;

 img {
 width: 7.2rem;
 height: 7.2rem;
 }

 p {
 font-size: 1.2rem;
 font-weight: 300;
 color: ${({ theme }) => theme.COLORS.LIGHT_400};
 }
 .info {
 display: flex;
 align-items: center;
 gap: 1rem;
 }

 .delete {
 color: ${({ theme }) => theme.COLORS.RED_400};
 cursor: pointer;
 }
 }

 &[data-total="false"]{
 .total {
 opacity: 0;
 }

 h3 {
 opacity: 1;
 font-size: 2rem;
 font-weight: 300;
 color: ${({ theme }) => theme.COLORS.LIGHT_400};
 }
 }

 span {
 font-family: 'Poppins', sans-serif;
 font-weight: 500;
 font-size: 2rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
 }

 button {
 display: none;
 }

 .completeSpace {
 display: none;
 }

 @media (max-width: 750px){
 width: 100%;
 padding-left: 2rem;
 padding-right: 2rem;

 .info {
 span {
 overflow: hidden;
 text-overflow: ellipsis;
 }
 p {
 display: none;
 }
 }

 button {
 display: block;
 width: 21.6rem;
 margin-top: 2rem;
 align-self: flex-end;
 }

 &[data-total="false"]{
 button {
 display: none;
 }
 .completeSpace {
 display: flex;
 height: 50vh;
 }
 }

 &[data-mobal-status="second"]{
 display: none;
 };
 &[data-mobal-status="finish"]{
 display: none;
 };

 }
`

export const Pay = styled.div`
 width: 53rem;

 display: flex;
 flex-direction: column;
 gap: 2rem;



 .payment {
 width: 100%;

 border: 1.5px solid ${({ theme }) => theme.COLORS.LIGHT_600};
 border-radius: .8rem;
 overflow: hidden;
 }

 .paymentForm {
 height: 8.1rem;
 width: 100%;

 display: flex;
 align-items: center;

 background-color: ${({ theme }) => theme.COLORS.DARK_500};
 border-bottom: 1.5px solid ${({ theme }) => theme.COLORS.LIGHT_600};
 border-radius: .8rem .8rem 0 0;
 }

 .pix {
 height: 100%;
 width: 50%;

 gap: .8rem;
 display: flex;
 align-items: center;
 justify-content: center;
 
 border-right: 1.5px solid ${({ theme }) => theme.COLORS.LIGHT_600};
 cursor: pointer;

 p {
 font-size: 1.6rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
 }
 }
.inPix {
 display: none;
}

 .credit {
 height: 100%;
 width: 50%;

 gap: .8rem;
 display: flex;
 align-items: center;
 justify-content: center;

 cursor: pointer;

 svg {
 font-size: 2.4rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
 }
 p {
 font-size: 1.6rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};
 }
 }
 .inCredit {
 display: none;
 }

 .pending, .preparing, .delivered {
 display: none;

 svg {
 font-size: 12.8rem;
 color: ${({ theme }) => theme.COLORS.LIGHT_600};
 }

 h3 {
 font-size: 2.4rem;
 font-weight: bold;
 color: ${({ theme }) => theme.COLORS.LIGHT_600};
 }
 }

 &[data-payment-form="pix"]{
 .pix {
 background-color: ${({ theme }) => theme.COLORS.DARK_800};
 }

 .inPix {
 width: 100%;
 height: 36.4rem;

 display: flex;
 align-items: center;
 justify-content: center;
 }
 };

 &[data-payment-form="credit"]{
 .credit {
 background-color: ${({ theme }) => theme.COLORS.DARK_800};
 }

 .inCredit {
 width: 100%;
 height: 38.1rem;

 display: flex;
 align-items: center;
 }

 form {
 width: 34.8rem;
 margin: auto;

 gap: 3.7rem;
 display: flex;
 flex-direction: column;
 }

 label {
 font-weight: 400;
 font-size: 1.6rem;
 color:  ${({ theme }) => theme.COLORS.LIGHT_400};
 }

 .input-wrapper {
 display: flex;
 flex-direction: column;
 gap: .8rem;
 }

 .others {
 gap: 1.7rem;
 display: flex;
 align-items: center;
 }
 };

 &[data-status="pendente"]{
 .inPix {
 display: none;
 }
 .inCredit {
 display: none;
 }
 .pix, .credit {
 pointer-events: none;
 background: none;
 }

 .pending {
 height: 31.1rem;
 width: 53rem;

 gap: 3.7rem;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 }
 };

 &[data-status="preparando"]{
 .inPix {
 display: none;
 }
 .inCredit {
 display: none;
 }
 .pix, .credit {
 pointer-events: none;
 background: none;
 }

 .preparing {
 height: 31.1rem;
 width: 53rem;

 gap: 3.7rem;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 }
 };

 &[data-status="entregue"]{
 .inPix {
 display: none;
 }
 .inCredit {
 display: none;
 }
 .pix, .credit {
 pointer-events: none;
 background: none;
 }

 .delivered {
 height: 31.1rem;
 width: 53rem;

 gap: 3.7rem;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 }
 }; 

 &[data-total="false"]{
 .pix, .credit {
 pointer-events: none;
 background: none;
 }
 }
 
 @media (max-width: 750px){
 &[data-mobal-status="first"]{
 display: none;
 }

 &[data-mobal-status="second"]{
 width: 100%;
 padding-left: 2rem;
 padding-right: 2rem;

 h3 {
 font-size: 2rem;
 }
 form {
 width: 30rem;

 button {
 svg {
 display: none;
 }
 }
 }
 };

 &[data-status="pendente"]{
 .pending {
 height: 31.1rem;
 width: 100%;
 }
 };

 &[data-status="preparando"]{
 .preparing {
 width: 100%;
 }
 };

 &[data-status="entregue"]{
 .delivered {
 width: 100%;
 }
 }; 
 };
`

export const Input = styled(InputMask)`
 height: 4.8rem;
 width: 100%;

 border: 1.5px solid ${({ theme }) => theme.COLORS.LIGHT_100};
 padding: 1.2rem 1.4rem;
 border-radius: .5rem;

 background: none;
 outline: none;


 font-size: 1.6rem;
 font-weight: 400;
 color:  ${({ theme }) => theme.COLORS.LIGHT_100};

&::placeholder {
 font-size: 1.6rem;
 font-weight: 400;
 color:  ${({ theme }) => theme.COLORS.LIGHT_500};
}

`

export const Return = styled.div`
display: flex;
align-items: center;

margin-top: 2rem;
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