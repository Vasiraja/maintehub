import './App.css';


import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import About from "./pages/About/About"
import Navbar from './components/Navbar/Navbar';
import Features from './pages/Features/Features';
import Featuredarticles from './components/Featuredarticles/Featuredarticles';
import Footer from './components/Footer/Footer';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Faqquestions from './components/Faqquestions/Faqquestions';
import Ourstory from './components/Ourstory/Ourstory';
function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />

 

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/out" element={<Ourstory />} />


        </Routes>
 


      </BrowserRouter>


    </div>
  );
}

export default App;
