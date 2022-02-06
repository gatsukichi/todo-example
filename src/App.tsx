import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BannerContainer } from "./component/banner/BannerContainer";
import { Button } from "./component/button/button";
function App() {
  return (
    <div className="App">
      <BannerContainer />
      <Button>ADD</Button>
    </div>
  );
}

export default App;
