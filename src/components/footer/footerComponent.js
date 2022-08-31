import { Container, Grid, Typography } from '@mui/material';

function FooterComponent() {
    return (
        <Container sx={{ backgroundColor: "#D9D9D9", color: "#342826" }} maxWidth={false}>
            <Grid container sm={12} padding={5} mt={10}>
                <Grid sm={1}></Grid>
                <Grid sm={6}>
                    <Typography variant='h4' m={3}><a style={{ color: "black", textDecoration: "none", fontWeight: 700 }} href='/'>NEWS</a></Typography>
                    <Typography sx={{ color: "black", fontWeight: 700 }} m={3}>© Copyright 2022 NEWS, All rights reserved</Typography>
                </Grid>
                <Grid sm={5} padding={2}>
                    <Typography variant='h6' sx={{ color: "black", fontWeight: 600 }} mb={2}>CONTACT</Typography>
                    <Typography mb={1}>Email: luuthanhtan0812@gmail.com</Typography>
                    <Typography mb={1}>Contact Us: 0799692221</Typography>
                </Grid>
            </Grid>
        </Container >
    )
}
export default FooterComponent;