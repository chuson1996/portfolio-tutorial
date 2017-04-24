import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter}></Waypoint>
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}

export default WhenInView;