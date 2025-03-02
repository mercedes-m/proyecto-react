import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
  <>  
  <Navbar />
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
      <ItemListContainer/>
  </>
  );
}

export default App