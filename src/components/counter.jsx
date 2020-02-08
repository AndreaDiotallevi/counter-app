import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  styles = {
    fontSize: 30
  }

  render() { 
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({id:1})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  handleIncrement = (product) =>  {
    console.log(product);
    this.setState({value: this.state.value + 1})
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}
 
export default Counter;
