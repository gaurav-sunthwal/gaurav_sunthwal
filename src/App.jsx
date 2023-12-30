import "./Styles/General.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import NotFound from "./Component/NotFound";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Work from "./Component/Work";
import About from "./Component/About";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Contacts" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
