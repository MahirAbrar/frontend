import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import ContactsList from "./pages/ContactsList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<ContactUs />} />
          <Route path="/contacts" element={<ContactsList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
