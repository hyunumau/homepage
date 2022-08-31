import { Container } from '@mui/material';

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import HeaderComponent from '../components/header/headerComponent';
import FooterComponent from '../components/footer/footerComponent';
import { fetchAPI } from '../components/FetchAPI';
import ProductDetail from '../components/product-detail/productDetail';
import { fetchProductDetail } from '../services/productService';


function ProductInfo() {


    return (
        <Container maxWidth={false}>
            {/* <!-- Header --> */}
            <HeaderComponent></HeaderComponent>
            {/* <!-- Content --> */}
            <ProductDetail/>
            {/* <!-- Footer --> */}
            <FooterComponent></FooterComponent>
        </Container>
    );
}

export default ProductInfo;
