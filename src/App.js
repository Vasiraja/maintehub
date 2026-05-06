import './App.css';


import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />




        </Routes>



      </BrowserRouter>


    </div>
  );
}

export default App;
