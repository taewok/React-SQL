import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import NoticeBoard from "./component/NoticeBoard";

function App() {
  return (
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Login">Login</Link>
      <Link to="/NoticeBoard">게시판</Link>
    </header>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Register" element={<Register></Register>}/>
        <Route path="/Login" element={<Login></Login>}/>
        <Route path="/NoticeBoard" element={<NoticeBoard></NoticeBoard>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
