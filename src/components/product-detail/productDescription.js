import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


function ProductDescription({ article }) {

    return (
        <Grid container padding={2}>
            <Grid item>
                <Typography dangerouslySetInnerHTML={{ __html: article.detail }}></Typography>
            </Grid>
        </Grid>
    )

}
export default ProductDescription;