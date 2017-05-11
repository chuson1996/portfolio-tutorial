import React, { Component } from 'react';
import { Background } from './App.style';
import NavigationBar from 'components/NavigationBar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <Background/>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
