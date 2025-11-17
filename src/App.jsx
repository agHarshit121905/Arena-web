import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/Home.jsx";
import Events from "./assets/pages/Events/Events.jsx";
import Sponsors from "./assets/pages/Sponsors/Sponsors.jsx";
import Gallery from "./assets/pages/Gallery/Gallery.jsx";
import viteLogo from "/vite.svg";
import "./App.css";//check comment

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* routing starts */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      {/* routing ends */}
    </>
  );
}

export default App;
