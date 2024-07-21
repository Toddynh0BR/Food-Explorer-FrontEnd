import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

export const Main = styled.div`
width: 113.2rem;
height: 100vh;

margin: auto;
margin-top: 10rem;


display: flex;
flex-direction: column;
gap: 2rem;

a {
div {
 margin-left: 0;
}
}

h2 {
 font-family: 'Poppins', sans-serif;
 font-size: 3.2rem;
 font-weight: 500;
 color: ${({ theme }) => theme.COLORS.LIGHT_300};
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

th, td {
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 2.1rem 2.4rem;
    text-align: left;

    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
}

td {
 color: ${({ theme }) => theme.COLORS.LIGHT_400};
 font-size: 1.4rem;
 font-weight: 400;
}

.status {
 width: 22.3rem;
}

.code {
 width: 15.189rem;
 border-right: 0;
}

.detals {
 width: 60.5rem;
}

.data {
 width: 15.1rem;
}

th.status:first-child {
    border-top-left-radius: 1rem;
    border-right: 0;
}

th.data:last-child {
    border-top-right-radius: 1rem;
    border-left: 0;
}

td.status:first-child {
    border-bottom-left-radius: 1rem;
}

td.data:last-child {
    border-bottom-right-radius: 1rem;
}

.select_container {
 width: 17.5rem;
 height: 4.8rem;

 position: relative;

 svg {
 pointer-events: none;
 position: absolute;
 right: 1.6rem;
 top: 1.6rem;

 color: ${({ theme }) => theme.COLORS.LIGHT_400};
 font-size: 1.6rem;
 }
}

.Status {
 border-top: 0;
 border-right: 0;
}

select {
 width: 100%;
 height: 100%;

-webkit-appearance: none; 
-moz-appearance: none; 
 appearance: none;
 outline: none;
 border: none;
 
 background-color: ${({ theme }) => theme.COLORS.DARK_900};
 padding: 1.5rem .8rem;

 color: ${({ theme }) => theme.COLORS.LIGHT_400};
 font-size: 1.4rem;
}

.Code {
 border-top: 0;
 border-right: 0;
}

.Details {
 border-top: 0;

 p {
 width: 51.4rem;

 text-overflow: ellipsis;
 white-space: nowrap; 
 overflow: hidden;
 }
}

.Data {
 border-top: 0;
 border-left: 0;
}

.mobalTable {
 display: none;
}


.NoHistoric {
 display: none;
}

div[data-orders-value="0"]{
.NoHistoric {
 width: 113.2rem;
 height: 30rem;

 display: flex;
 align-items: center;
 justify-content: center;
 gap: 1rem;

 border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
 border-radius: 0 0 .8rem .8rem;
 border-top: 0;

 img {
 width: 5rem;
 height: 5rem;

 opacity: .6;
 }

 h2 {
 opacity: .6;
 }
}
};

@media (max-width: 750px){
 width: 100%;

 margin: 0;
 margin-top: 10rem;
 margin-bottom: 20rem;

 padding-left: 2rem;
 
 .table {
 display: none;
 }

 .NoHistoric {
 display: none;
 }

 .mobalTable {
 display: flex;
 flex-direction: column;
 gap: 2rem;
 }

 .order {
 width: 35.8rem;
 height: 19.4rem;

 display: flex;
 flex-direction: column;
 gap: 1.6rem;

 border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
 border-radius: .8rem;
 padding: 2.4rem;

 color: ${({ theme }) => theme.COLORS.LIGHT_300};
 font-size: 1.4rem;
 font-weight: 300;
 }

 .Row1 {
 display: flex;
 align-items: center;
 gap: 1rem;
 }

 .Row2 {
 p {
 width: 31.5rem;
 height: 4rem;

 overflow: hidden;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 text-overflow: ellipsis;
 line-height: 2rem;
 }
 }

 #MStatus {
 width: 100%;
 height: 100%;
 }

 .select_container_mobal {
 width: 31.5rem;
 height: 4.8rem;

 position: relative;

 svg {
 pointer-events: none;
 position: absolute;
 right: 1.6rem;
 top: 1.6rem;

 color: ${({ theme }) => theme.COLORS.LIGHT_400};
 font-size: 1.6rem;
 }
}
}
`