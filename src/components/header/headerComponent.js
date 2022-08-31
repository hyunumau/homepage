import { AppBar, Button, Toolbar, Grid, Typography, Menu, MenuItem, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { fetchCategories } from '../../services/productService';


function HeaderComponent() {
    const [categories, setCategories] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        loaded || fetchCategories().then(data => {
            setCategories(data);
            setLoaded(true)
        })
    }, [loaded])

    return (
        <AppBar component="nav" >
            <Toolbar sx={{ backgroundColor: "lightblue" }}>
                <Grid item >
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            ml: 10,
                            flexGrow: 1,
                            fontWeight: 700,
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        NEWS
                    </Typography>
                </Grid>
                <Grid paddingRight={10} paddingLeft={10} textAlign="center" color="black">
                    <a href='/' style={{ color: "black", textDecoration: "none" }}>Home</a>
                </Grid>
                <Grid paddingRight={10} paddingLeft={10} textAlign="center" color="black">
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button sx={{ textTransform: "none", color: "black" }} {...bindTrigger(popupState)}>
                                    Categories
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    {
                                        loaded ? categories.map((cate, index) => {
                                            return <MenuItem key={index} onClick={popupState.close}>
                                                <a style={{ color: "black", textDecoration: "none" }} href={"/category/" + cate.id}>{cate.name}</a>
                                            </MenuItem>
                                        }) : null
                                    }
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                </Grid>
                <Grid paddingRight={10} paddingLeft={10} textAlign="center" color="black">
                    <a href='/tags' style={{ color: "black", textDecoration: "none" }}>Tags</a>
                </Grid>
                <Grid  paddingLeft={10} textAlign="center" color="black">
                    <form action='/search'>
                        <input type="search" name='search' className="form-control" placeholder="Tìm kiếm ..." />
                    </form>
                </Grid>
            </Toolbar>
        </AppBar >
    )
}
export default HeaderComponent;