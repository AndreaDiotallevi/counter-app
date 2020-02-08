import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0},
      { id: 2, value: 1}
    ]
  }

  render() { 
    return (
      <div>
        <button
        onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map(counter => 
        <Counter
          key={counter.id}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          counter={counter}/>)}
      </div>
    );
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
}
 
export default Counters;
