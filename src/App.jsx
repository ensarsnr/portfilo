import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="project" element={<Projects />}/>
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
