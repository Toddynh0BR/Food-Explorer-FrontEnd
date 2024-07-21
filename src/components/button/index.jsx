import { Container } from "./style";


export function Button({title, loading = false, icon: Icon, ...rest}){
 return(
    <Container disabled={loading} type='button' {...rest}>
        {Icon && <Icon />}
     <p>{loading ? 'Carregando...' : title}</p>
    </Container>

 )
}