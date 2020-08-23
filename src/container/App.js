import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import ToDay from "../component/today";
import DaysInWeek from "../component/days-in-week";

function App() {
  return (
    <div className="App">
      <div class="card">
        <ToDay />
        <DaysInWeek />
      </div>
    </div>
  );
}

export default App;
