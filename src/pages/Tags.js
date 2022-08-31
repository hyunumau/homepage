import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../components/header/headerComponent';
import FooterComponent from '../components/footer/footerComponent';
import { fetchTags } from '../services/productService';
import { useEffect, useState } from 'react';

function Tags() {
  const [tags, setTags] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loaded || fetchTags().then(data => {
      setTags(data);
      setLoaded(true)
    })
  }, [loaded])
  return (
    <Container maxWidth={false}>
      {/* <!-- Header --> */}
      <HeaderComponent></HeaderComponent>
      {/* <!-- Content --> */}
      <div style={{ paddingTop: "100px" }}>
        <h5 className="mb-4 text-uppercase font-weight-bold">Tags</h5>
        <div className="m-n1">
          {
            loaded ? tags.map((tag, index) => {
              return <a key={index} href={"/tags/" + tag.id} className="btn btn-sm btn-secondary m-1">{tag.name}</a>
            }) : null
          }
          
        </div>
      </div>
      {/* <!-- Footer --> */}
      <FooterComponent></FooterComponent>
    </Container>
  );
}

export default Tags;
