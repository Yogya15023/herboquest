import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";
import Contact_us from "./component/Contact_us";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact_us" element={<Contact_us />} />
      </Routes>
    </>
  );
}

export default App;
