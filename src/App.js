import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import Body from './Body/Body';
import './App.css';
import state from './State.js';

class App extends React.Component {
  
  state = {
    state: state
  }
  
  render() {
    
    return (
      <div class="wrapper">
        <HeaderTop />
        <Body state={this.state} />
      </div>
    )
  }
}

export default App;
