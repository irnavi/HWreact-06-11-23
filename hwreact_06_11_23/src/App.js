import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from "./pages/about/About";
import Impressum from "./pages/impressum/Impressum"

function App() {
  return (
    <Router>

      <Header />

          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/imp" element={<Impressum />} />
          </Routes>

      <Footer />

    </Router>
  );
}

export default App;
