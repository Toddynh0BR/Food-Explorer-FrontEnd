import { createGlobalStyle } from "styled-components";
import { register } from "swiper/element/bundle"
register();
import "swiper/css";
import "swiper/css/navigation"

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'Roboto', sans-serif;
 transition: .3s ease-in-out;

 ::-webkit-scrollbar {
    width: .5rem;
}
::-webkit-scrollbar-track {
    background: #000A0F; 
    border-radius: .5rem;
}
::-webkit-scrollbar-thumb {
    background: #00111A; 
    border-radius: .5rem;
}

}

:root {
 font-size: 62.5%;
}

body {
 background-color: #000A0F;


}

a {
 text-decoration: none;
}


`