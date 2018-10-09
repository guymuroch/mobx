import React, { Component } from "react";
import { observer } from "mobx-react";

import logo from "./logo.svg";
import "./App.css";

@observer
class App extends Component {
  deleteIceCream() {
    console.log();
    // this.props.store.deleteIceCream(index);
  }
  addNewIceCream(e) {
    if (e.charCode === 13) {
      this.props.store.addIceCream(e.target.value);
      e.target.value = "";
    }
  }
  filter(e) {
    this.props.store.filter = e.target.value;
  }
  render() {
    const { filter, filteredIceCreams, iceCreams } = this.props.store;
    return (
      <div className="App">
        <h1>Ice Creame</h1>
        <h3>search ice Creame</h3>
        <div>{filter}</div>
        <input
          className="filter"
          value={filter}
          onChange={this.filter.bind(this)}
        />
        <h3>add new</h3>
        <input className="filter" onKeyPress={this.addNewIceCream.bind(this)} />
        {filteredIceCreams.map((ice, index) => {
          return <li onClick={this.deleteIceCream}>{ice}</li>;
        })}
      </div>
    );
  }
}

export default App;
