import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.store.iceCreams.map((iceCream, i) => (
          <li key={i}>{iceCream.flavor}</li>
        ))}
      </div>
    );
  }
}

export default App;
