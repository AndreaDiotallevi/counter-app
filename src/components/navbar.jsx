import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <div>
        Navbar
        {this.props.totalCounters}
      </div>
    );
  }
}
 
export default NavBar;
