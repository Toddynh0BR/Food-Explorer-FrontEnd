import { Container } from "./style";

export function Tag({title, ...rest}){
    return(
        <Container
        type="button"
        {...rest}
        >
            {title}
        </Container>
    )
}