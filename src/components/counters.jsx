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
        {this.state.counters.map(counter => 
        <Counter
          key={counter.id}
          onDelete={this.handleDelete}
          counter={counter}/>)}
      </div>
    );
  }

  handleDelete = (counterId) => {
    console.log('Event Handler Called', counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  }
}
 
export default Counters;
