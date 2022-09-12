import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../../services/productService';
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
          <div className='fh5co_suceefh5co_height_2'>
            <img style={{ width: '100%', height: "404px" }}
              src={"https://admin-project-image.s3.ap-southeast-1.amazonaws.com/" + article[0].image} />
            <div class="fh5co_suceefh5co_height_position_absolute"></div>
            <div class="fh5co_suceefh5co_height_position_absolute_font_2"></div>
            <div>
              <a className="format-hotnews fh5co_good_font_2"
                href={"/article/" + article[0].id}
              >
                {article[0].caption}
              </a>
            </div>
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