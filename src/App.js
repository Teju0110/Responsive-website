import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Product from "./Components/Product";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import {productData, productDataTwo} from './Components/Data'


function App() {
  return (
  <Router>
    <Home/>
    <Product heading="Choose Your favourite" data={productData}/>
    <Features/>
    <Product heading="Sweet Treat For You" data={productDataTwo}/>
    <Footer/>
  </Router>
    
  );
}

export default App;
