import Header from "./components/Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto.js";
import Productos from "./components/Productos.js";
import Home from "./components/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
