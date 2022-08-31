import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ProductDescription from './productDescription';
import { fetchProductDetail } from '../../services/productService';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {  
        loaded || fetchProductDetail(id).then(data => {
            setArticle(data);
            setLoaded(true)
        })
    }, [loaded])

    return (
        loaded &&
        <Grid container sm={12} textAlign="center" margin={2} backgroundColor="white">
            <Grid sm={12} textAlign="left" paddingTop={10}>
                <Grid item padding={2}>
                    <Typography fontWeight={600}>Categories:
                        {
                            article.categories.map((cate, index) => {
                                return <a href={'/category/' + cate.id} key={index} style={{ fontWeight: 400, textDecoration:"none" }}>{index == 0 ? null : ","}&nbsp;{cate.name}</a>;
                            })
                        }
                    </Typography>
                </Grid>
                <Grid item padding={2}>
                    <Typography fontWeight={600}>Tags:
                        {
                            article.tags.map((tag, index) => {
                                return <a href={'/tags/' + tag.id} key={index} style={{ fontWeight: 400, textDecoration:"none", color:"grey" }}>{index == 0 ? null : ","}&nbsp;<LocalOfferIcon />{tag.name}</a>;
                            })
                        }
                    </Typography>
                </Grid>
            </Grid>
            <Grid sm={12} m={4}>
                <h1 style={{ color: "red" }}>{article.caption}</h1>
            </Grid>
            <Grid textAlign="left">
                <ProductDescription article={article} />
            </Grid>
            <Grid sm={11} textAlign="right" marginTop={2}>
                <h4>{article.author_info?.name}</h4>
            </Grid>
        </Grid>
    )

}
export default ProductDetail;