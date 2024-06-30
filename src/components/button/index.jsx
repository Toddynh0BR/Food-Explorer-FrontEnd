import { Container } from "./style";
import { Test } from "../../scripts/script.js"

export function Button({title, loading = false, icon: Icon, ...rest}){
 return(
    <Container disabled={loading} onClick={Test}>
        {Icon && <Icon />}
     <p>{loading ? 'Carregando...' : title}</p>
    </Container>

 )
}