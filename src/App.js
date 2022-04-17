import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;