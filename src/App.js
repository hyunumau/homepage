import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductInfo from "./pages/ProductInfo";
import Tags from "./pages/Tags";
import TagDetail from "./pages/TagDetail";
import CategoryDetail from "./pages/CategoryDetail";
import Search from "./pages/Search";

function App() {


  return (
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/article/:id" element={<ProductInfo></ProductInfo>}></Route>
      <Route exact path="/tags" element={<Tags></Tags>}></Route>
      <Route exact path="/tags/:id" element={<TagDetail />}></Route>
      <Route exact path="/category/:id" element={<CategoryDetail />}></Route>
      <Route exact path="/search" element={<Search />}></Route>
    </Routes>
  );
} 

export default App;
