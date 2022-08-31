import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../../services/productService';


function MiniNews({ articleProp, heightProp }) {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetchProduct().then(data => { setArticle(data) })
        console.log(articleProp)
    }, [])

    return (
        articleProp ?
            <div style={{
                position: "relative",
            }}>
                <a style={{
                    position: "absolute",
                    top: "70%",
                    left: "10%",
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '600',
                    textDecoration: "none",
                    maxWidth: '100%',
                    maxHeight: '115px',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    paddingBottom: "10px"
                }}
                    href={"/article/" + articleProp.id}
                >
                    {articleProp.caption}
                </a>
                <img style={{ width: '100%', height: "202px" }} src={articleProp.image}></img>
            </div> : null
    )

}
export default MiniNews;