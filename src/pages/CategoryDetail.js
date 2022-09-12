import { Container, Grid, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../components/header/headerComponent';
import FooterComponent from '../components/footer/footerComponent';
import { fetchGetArticleByCategories } from '../services/productService';
import { useEffect, useState } from 'react';
import ProductCard from '../components/products/productCard';
import { useParams } from 'react-router-dom';

function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loaded || fetchGetArticleByCategories(id).then(data => {
      setCategory(data);
      console.log(data);
      setLoaded(true)
    })
  }, [loaded])
  return (
    <Container maxWidth={false}>
      {/* <!-- Header --> */}
      <HeaderComponent></HeaderComponent>
      {/* <!-- Content --> */}
      <Container>
        {/* <!-- Lastest Product --> */}
        <Grid textAlign="center" paddingTop="100px">
          <Typography variant='h5' sx={{ fontWeight: 800 }}>Category: {category ? category.name : null}</Typography>
        </Grid>

        {
          loaded ?
            <Container>
              <Grid container sm={12} paddingTop={5} justifyContent="center">
                {
                  category ?
                  category.articles.map((art, index) => {
                    return (
                        <Grid sm={4}>
                          <ProductCard productProp={art} key={index}></ProductCard>
                        </Grid>
                    )
                  }) : <h2>Category not found</h2>
                }
              </Grid>
            </Container>
            : null
        }
      </Container>
      {/* <!-- Footer --> */}
      <FooterComponent></FooterComponent>
    </Container>
  );
}

export default CategoryDetail;
