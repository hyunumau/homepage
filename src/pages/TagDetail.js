import { Container, Grid, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../components/header/headerComponent';
import FooterComponent from '../components/footer/footerComponent';
import { fetchGetArticleByTags } from '../services/productService';
import { useEffect, useState } from 'react';
import ProductCard from '../components/products/productCard';
import { useParams } from 'react-router-dom';

function TagDetail() {
  const { id } = useParams();
  const [tags, setTags] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loaded || fetchGetArticleByTags(id).then(data => {
      setTags(data);
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
          <Typography variant='h5' sx={{ fontWeight: 800 }}>Tag: {tags ? tags.name : null}</Typography>
        </Grid>

        {
          loaded ?
            <Container>
              <Grid container sm={12} paddingTop={5} justifyContent="center">
                {
                  tags ?
                  tags.articles.map((art, index) => {
                    return (
                      art.publish === 1 ?
                        <Grid sm={4}>
                          <ProductCard productProp={art} key={index}></ProductCard>
                        </Grid> : null
                    )
                  }) : <h2>Tag not found</h2>
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

export default TagDetail;
