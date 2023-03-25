import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import Cars from "./components/Cars/Cars";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [nav, setNav] = useState("Header");

  useEffect(() => {
    if (nav.length > 0) {
      const element = document.getElementById(`${nav}`);

      element.scrollIntoView({ behavior: "smooth" });
    }
    setNav("");
  }, [nav]);

  return (
    <div className="body">
      <div className="bodycontent ">
        <div id="Header" className="sticky">
          <Header setnav={setNav} />
        </div>
        <div id="Home">
          <Home />
        </div>
      </div>
      <div id="Cars">
        <Cars />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
