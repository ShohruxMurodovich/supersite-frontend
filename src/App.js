import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./Assets/main.css"
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/blog" element={<Blog/>} />
    </Routes>
  );
}

export default App;
