import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Bill from "./pages/Bill";
import PriceList from "./pages/PriceList";
import Home from "./pages/Home";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/priceList" element={<PriceList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
