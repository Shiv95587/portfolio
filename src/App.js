import "./App.css";
import Header from "./sections/Header.js";

import { useState } from "react";

import Main from "./Main.js";

function App() {
  const [currentTab, setCurrentTab] = useState("Skills");
  return (
    <div className="App">
      <Header />
      <Main currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default App;
