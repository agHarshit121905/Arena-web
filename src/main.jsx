import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./assets/components/Footer.jsx";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Navbar from "./assets/components/Navbar/Navbar.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <div className="bg-black">
    <App />
    <Footer />
    </div>
  </BrowserRouter>
);
