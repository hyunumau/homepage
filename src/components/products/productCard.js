import { ConstructionOutlined } from '@mui/icons-material';
import { Grid, Card, CardActionArea, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

function ProductCard({ productProp }) {
    function getUrl(value) {
        var pattern = new RegExp('/^http(s)*\:\/\/[a-zA-Z0-9\-_\.]+\//i');
        if (/https:/.test(value)) {
            return value;
        }
        return "http://localhost/storage/" + value;
    }
    return (
        <Grid textAlign="center" mb={2} padding={1} sx={{ height: "100%", alignSelf: "end", textAlign: "center" }}>
            <Card sx={{ height: "100%" }}>
                <CardActionArea href={"/article/" + productProp.id} sx={{ height: "100%" }}>
                    <CardContent sx={{ height: "500px" }}>
                        <img src={getUrl(productProp.image)} alt={productProp.caption} style={{ objectFit: "fill", width: "100%", height: "225px" }}></img>
                        <Grid margin={1}>
                            <Typography gutterBottom padding={2} fontSize={20} fontWeight={600} style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                                {productProp.caption}
                            </Typography>
                        </Grid>
                        <Grid sx={{ height: "150px" }}>
                            <Typography style={{
                                maxWidth: '100%',
                                maxHeight: '115px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 5,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                                dangerouslySetInnerHTML={{ __html: productProp.detail }}></Typography>
                        </Grid>
                        <Grid>
                            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{productProp.author_info ? productProp.author_info.name : null}</Typography>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid >
    )
}
export default ProductCard;