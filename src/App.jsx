import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./models/Sign";
import Login from "./models/Login";
import Java from "./Code/Java.jsx";
import Navbar from "./components/Navbar";
import Python from "./Code/Python";
import C from "./Code/C";
import Footer from "./components/Footer";
import Nodejs from "./Code/Nodejs";
import Html from "./Code/Html";
import Tutorials from "./models/Tutorials";
import Home from "./models/Home";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Sign />} />
          <Route
            path="/signin"
            element={<Sign onSignUpComplete={() => setIsLoggedIn(false)} />}
          />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
                

          <Route path="/java" element={<Java />} />
          <Route path="/python" element={<Python />} />
          <Route path="/c++" element={<C />} />
          <Route path="/html" element={<Html />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
