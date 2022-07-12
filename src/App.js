import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Blog from "./views/Blog";
import Post from "./views/Post";
import Art from "./views/Art";
import Footer from "./components/Footer";
import GoUp from "./components/GoUp";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/art" element={<Art />} />
        <Route path=":service/:postId" element={<Post />} />

        <Route
          path="*"
          element={
            <main className="container py-5 mx-auto">
              <p className="text-xl">There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <Footer />

      <GoUp />
    </Router>
  );
}

export default App;
