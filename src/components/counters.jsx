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
        <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value}/>)}
      </div>
    );
  }

  handleDelete = () => {
    console.log('Event Handler Called')
  }
}
 
export default Counters;
