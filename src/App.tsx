import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "antd";
import "./App.css";
import Navbar from "./component/navbar";
import Herosections from "./component/herosections";
import Footer from "./component/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Herosections />
        <div className="App"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
