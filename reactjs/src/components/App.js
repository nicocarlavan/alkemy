import React from "react";
import Sidebar from "./Sidebar";
import ContentWrapper from "./ContentWrapper";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />
      </div>
    </div>
  );
}

export default App;
