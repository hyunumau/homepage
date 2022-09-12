import { Container, Grid, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../components/header/headerComponent';
import FooterComponent from '../components/footer/footerComponent';
import { fetchProduct } from '../services/productService';
import { useEffect, useState } from 'react';
import ProductCard from '../components/products/productCard';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchProduct({ search: searchParams.get('search') })
      .then(data => {
        console.log(data)
        setArticles(data);
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
          <Typography variant='h5' sx={{ fontWeight: 800 }}>Kết quả tìm kiếm: {searchParams.get('search')} </Typography>
        </Grid>

        {
          loaded ?
            <Container>
              <Grid container sm={12} paddingTop={5} justifyContent="center">
                {
                  articles[0]?
                  articles.map((art, index) => {
                    return (
                        <Grid sm={4}>
                          <ProductCard productProp={art} key={index}></ProductCard>
                        </Grid>
                    )
                  }): "Không tìm thấy"
                }
              </Grid>
            </Container>
            : "Không tồn tại"
        }
      </Container>
      {/* <!-- Footer --> */}
      <FooterComponent></FooterComponent>
    </Container>
  );
}

export default Search;
