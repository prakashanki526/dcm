import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import { useEffect } from "react";
import ComingSoon from "./pages/ComingSoon";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/our-team" element={<OurTeam />}></Route>
        <Route path="/our-services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/social" element={<ComingSoon />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
