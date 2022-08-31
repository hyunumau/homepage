import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../../services/productService';
import ProductCard from '../../products/productCard';
import MiniNews from './miniNews';


function HotNews() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchProduct().then(data => { setArticle(data) })
  }, [])

  return (
    article[0] ?
      <Grid container paddingTop={10} paddingBottom={5}>
        <Grid sm={6}>
          <div style={{
            position: "relative",
          }}>
            <div>
              <a style={{
                position: "absolute",
                top: "70%",
                left: "10%",
                color: 'white',
                fontSize: '25px',
                fontWeight: '600',
                textDecoration: "none",
                maxWidth: '100%',
                maxHeight: '115px',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                paddingRight: "10px"
              }}
                href={"/article/" + article[0].id}
              >
                {article[0].caption}
              </a>
            </div>
            <img style={{ width: '100%', height: "404px" }} src={article[0].image}></img>
          </div>
        </Grid>
        <Grid sm={6}>
          <Grid container sm={12}>
            {
              article.slice(1, 3).map((art, index) => {
                return (
                  <Grid key={index} sm={6}>
                    <MiniNews articleProp={art} />
                  </Grid>
                )
              })
            }
          </Grid>
          <Grid container sm={12}>
            {
              article.slice(3, 5).map((art, index) => {
                return (
                  <Grid key={index} sm={6}>
                    <MiniNews articleProp={art} />
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid> : null
  )

}
export default HotNews;