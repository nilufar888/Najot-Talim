import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Section2 from "./Components/Section2/Section2";
import AboutUs from "./Components/AboutUs/AboutUs";
import Article2 from "./Components/Article2/Article2";
import Blog from "./Components/Blog/Blog";
import Education from "./Components/Education/Eduction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about/offline" element={<Section2 />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/aboutus/Bizning jamoa" element={<Article2 />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/education" element={<Education />}></Route>
      </Routes>
    </>
  );
}

export default App;
