import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import Contacto from './pages/Contacto';
import CategoriasProvider from './context/CategoriasContext';
import ProductosProvider from './context/ProductosContext';
import Carrito from './pages/Carrito';

function App() {
  return (
    <ProductosProvider>
    <CategoriasProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </CategoriasProvider>
    </ProductosProvider>
  );
}

export default App;
