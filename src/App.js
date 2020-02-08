import React, { Component } from 'react';
import './App.css';
import Counters from "./components/counters"
import Navbar from "./components/navbar"

 class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0},
      { id: 2, value: 1}
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters})
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters})
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  }

  render() { 
    return (
      <div>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <div>
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
