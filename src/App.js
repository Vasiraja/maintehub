import './App.css';


import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import About from "./pages/About/About"
import Navbar from './components/Navbar/Navbar';
import Features from './pages/Features/Features';
import Featuredarticles from './components/Featuredarticles/Featuredarticles';
import Footer from './components/Footer/Footer';
import Blogs from './pages/Blogs/Blogs';
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


        </Routes>
 


      </BrowserRouter>


    </div>
  );
}

export default App;
