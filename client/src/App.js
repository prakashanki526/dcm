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
import HomeAdmin from './pages-admin/Home';
import Login from './pages-admin/Login';
import Signup from './pages-admin/Signup';
import ProtectedRoute from './components-admin/ProtectedRoute';
import CareersAdmin from './pages-admin/Careers';
import Queries from './pages-admin/Queries';

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
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/careers" element={<CareersAdmin />} />
          <Route path="/admin/queries" element={<Queries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
