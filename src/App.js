
import React from "react";
import Dictionary from "./Dictionary.js";
import './App.css';

function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
      <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
              <a href="https://github.com/ltasker443/react-dictionary" rel="noreferrer" target="_blank"> Open Source </a> by Laura Tasker & hosted on <a href="https://admirable-bunny-423ff4.netlify.app/" rel="noreferrer" target="_blank">Netlify</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
