import Card from "./components/Card";
import WhatIDo from "./components/WhatIDo";
import About from "./components/About";
import "./index.css";

function Home() {
  return (
    <div className="fade-in container mx-auto pt-5">
      <Card />
      <WhatIDo />
      <About />
    </div>
  );
}

export default Home;
