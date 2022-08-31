import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../../services/productService';
import ProductCard from '../../products/productCard';


function Product() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchProduct().then(data => { setArticle(data) })
  }, [])

  return (
    <Container>
      {/* <!-- Lastest Product --> */}
      <Grid textAlign="center">
        <Typography variant='h5' sx={{ fontWeight: 800 }}>LASTEST NEWS</Typography>
      </Grid>

      {
        article ?
          <Container>
            <Grid container sm={12} paddingTop={5} justifyContent="center">
              {
                article.slice(0,6).map((art, index) => {
                  return (
                    art.publish ?
                      <Grid sm={4}>
                        <ProductCard productProp={art} key={index}></ProductCard>
                      </Grid>
                      : null
                  )
                })
              }
            </Grid>
          </Container>
          : null
      }
    </Container>
  )

}
export default Product;