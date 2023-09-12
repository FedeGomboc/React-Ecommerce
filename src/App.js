import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import Contacto from './pages/Contacto';
import CategoriasProvider from './context/CategoriasContext';

function App() {
  return (
    <CategoriasProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </CategoriasProvider>
  );
}

export default App;
