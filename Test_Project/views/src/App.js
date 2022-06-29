import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";

function App() {
  return (
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Login">Login</Link>
    </header>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Register" element={<Register></Register>}/>
        <Route path="/Login" element={<Login></Login>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
