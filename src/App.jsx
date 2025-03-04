import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './components/NavBar';
import  { Routes, Route } from 'react-router-dom';
import './App.css'
import  ItemListContainer from './components/ItemListContainer';
import Home from './pages/Home'; 
import Category from './pages/Category'; 
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
  <>  
  <NavBar />
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
  </>
  );
}

export default App  