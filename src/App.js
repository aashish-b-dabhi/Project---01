import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ProductCard from "./components/pages/ProductCard";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/:id" element={<ProductCard />} />
            </Routes>

            <Footer />
        </>
    )

}

export default App