import Calculator from "./components/calc";
import Footer from "./components/footer";
import Login from "./components/login";
import NavBar from "./components/navbar";
import Register from "./components/register";
import Errore from "./components/Error";

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./components/home";

function App() {
  return (
    <>
    <NavBar />
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
     <Route path ="/register" element={<Register />}/>
     <Route path ="/login" element={<Login />}/>
     <Route path ="/calculator" element={<Calculator />}/>
     <Route path ="/home" element={<Home />}/>
     <Route path="/*" element={<Errore />}/>
     </Routes>
      </BrowserRouter>
      <Footer />
    </>
    
  );
}

export default App;
