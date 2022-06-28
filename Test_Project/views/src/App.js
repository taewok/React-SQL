import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Login">Login</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/About" element={<About></About>}/>
        <Route path="/Login" element={<Login></Login>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
