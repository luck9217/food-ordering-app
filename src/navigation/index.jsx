import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../components/Header";
import Home from "../pages/Home";
import Menu from "../pages/Home";
import Cart from "../pages/Home";
import Login from "../pages/Home";
import PaymentSuccess from "../pages/Home";
import Register from "../pages/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
