import { Container, Grid } from '@mui/material';
import HotNews from './product/hotNews';
import Product from './product/product';


function ContentComponent() {
    return (
        <Container>
            <HotNews></HotNews>
            <Product></Product>
        </Container>
    )
}
export default ContentComponent;