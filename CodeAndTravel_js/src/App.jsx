import Contato from "./Pages/Contatos";
import Destino from "./Pages/Destino";
import Promo from "./Pages/Promocoes";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div ClassName="App">
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
