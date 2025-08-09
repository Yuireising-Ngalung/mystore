import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./core/Header";
import Cart from "./Pages/Cart";
import CartContextProvider from "./context/cart/CartContextProvider";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./core/Footer";
import LoginSingup from "./Pages/LoginSignup";
import AuthProvider from "./context/auth/AuthProvider";
import Dashboard from "./Pages/Dashboard";

export default function App(){
    return(<BrowserRouter>
        <AuthProvider>
            <CartContextProvider>
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="login" element={<LoginSingup />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                </Routes>
                <Footer />
            </CartContextProvider>
        </AuthProvider>
    </BrowserRouter>)
}