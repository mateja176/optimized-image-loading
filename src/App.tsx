import React from "react";
import "./App.css";
import lambda from "./lambda.svg";
import logo from "./logo.svg";
import neutronStartCollision from "./neutron-star-collision.png";

const App: React.FC = () => {
  console.log(logo);
  console.log(lambda);
  console.log(neutronStartCollision);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
