import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import './App.css'

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
  </>
  );
}

export default App