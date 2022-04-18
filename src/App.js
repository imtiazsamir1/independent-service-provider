import { Button, Col } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import CheckOut from "./Components/CheckOut/CheckOut";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/LogIn/LogIn";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/CheckOut" element={<CheckOut></CheckOut>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
