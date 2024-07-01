import { Container } from "./style";


export function Button({title, loading = false, icon: Icon, ...rest}){
 return(
    <Container disabled={loading} >
        {Icon && <Icon />}
     <p>{loading ? 'Carregando...' : title}</p>
    </Container>

 )
}