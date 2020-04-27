import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import Form from "./components/Form";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    budget: 100,
    amount: 0,
  };

  getSushis = () => fetch(API).then(resp => resp.json());

  eatSushi = ({ id, price }) => {
    const budget = this.state.budget - price;

    if (budget >= 0 && !this.checkEaten(id)) {
      this.setState({ eatenSushis: [...this.state.eatenSushis, id], budget });
    }
  };

  onAmountChange = e => {
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  };

  onAmountSubmit = e => {
    e.preventDefault();

    this.setState({ budget: this.state.budget + this.state.amount });
  };

  checkEaten = id => this.state.eatenSushis.includes(id);
  q;

  componentDidMount() {
    this.getSushis().then(sushis => this.setState({ sushis }));
  }

  render() {
    return (
      <div className="app">
        <Form
          amount={this.state.amount}
          handleOnChange={this.onAmountChange}
          onSubmit={this.onAmountSubmit}
        />
        <SushiContainer
          sushis={this.state.sushis}
          eatSushi={this.eatSushi}
          checkEaten={this.checkEaten}
        />
        <Table
          budget={this.state.budget}
          eatenSushis={this.state.eatenSushis}
        />
      </div>
    );
  }
}

export default App;
