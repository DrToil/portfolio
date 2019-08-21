import React from "react";
import "./App.css";
import bckimg from "./img/bck-header-img.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <div className="nav-container">
          <nav class="nav-checkbox">
            <a href="#" className="logo">
              <h1>(DT)/></h1>
            </a>
            <input id="tab-nav" type="checkbox" class="tab-nav" name="tabs" />
            <label for="tab-nav" class="tab-nav-label">
              Menu
            </label>
            <ul class="tab-content">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="headerImg">
        <img src={bckimg} alt="backgorund header" />
        <h1>Dr Toil</h1>
      </div>
    </div>
  );
}

export default App;
