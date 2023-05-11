import Header from "./components/Header";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Context from "./context/Context";

function App() {

  return (
    <Context>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
        </Routes>
      </BrowserRouter> 
    </Context>
  );
  
}
export default App;


// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDZ8vxIYYLc6NkTEtxoIn7QobcPppwKwWo


