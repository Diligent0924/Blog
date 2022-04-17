import './App.css';
import React,{Component} from 'react';
import Increasebutton from './Increasebutton';

class App extends Component {
  state = {
    hello: "hello react-js-yahu"
  }
  render(){
    return (
      <div>
        <div className="App">{this.state.hello}</div>
        <div>
          <Increasebutton />
        </div>
      </div>
    );
  }
}

export default App;
