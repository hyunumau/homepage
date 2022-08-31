import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../components/header/headerComponent';
import FooterComponent from '../components/footer/footerComponent';
import ContentComponent from '../components/content/contentComponent';

function Home() {
  return (
    <Container maxWidth={false}>
      {/* <!-- Header --> */}
      <HeaderComponent></HeaderComponent>
      {/* <!-- Content --> */}
      <ContentComponent></ContentComponent>
      {/* <!-- Footer --> */}
      <FooterComponent></FooterComponent>
    </Container>
  );
}

export default Home;
