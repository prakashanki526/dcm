import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/our-team" element={<OurTeam />}></Route>
        <Route path="/our-services" element={<Services />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
