import React,{Component} from 'react';

class Increasebutton extends Component {
  state = {
    number : 0 
  }

  Increase = () => {
      this.setState({
        number : this.state.number + 1
      })
  }
  render(){
    return (
    <div>
      <div className="number">{this.state.number}</div>
      <button onClick={this.Increase}> + </button>
    </div>
    );
  }
}

export default Increasebutton;