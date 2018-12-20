import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Buttons from "../components/Buttons";
import './App.css';

class App extends Component {
  state = {
    buttons: [
      {
        id: 0,
        letter: "q"
      },
      {
        id: 1,
        letter: "w"
      },
      {
        id: 2,
        letter: "e"
      },
      {
        id: 3,
        letter: "a"
      },
      {
        id: 4,
        letter: "s"
      },
      {
        id: 5,
        letter: "d"
      },
      {
        id: 6,
        letter: "z"
      },
      {
        id: 7,
        letter: "x"
      },
      {
        id: 8,
        letter: "c"
      },
    ],
    on: true
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressHandler);
  }

  onOffHandler = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      }
    });
  };

  keyPressHandler = (event) => {
    console.log(event.keyCode);
  }

  render() {
    return (
      <div className="soundboard" onKeyDown={this.keyPressHandler} >
        <div className="top">
          <p>Arnold Schwarzenegger Soundboard</p>
          <Switch
            checked={this.state.on}
            onChange={this.onOffHandler}
            value={this.state.on}
            color="primary"
          />
        </div>
        <div className="display">
          <h1>Welcome</h1>
        </div>
        <Buttons buttons={this.state.buttons} />
      </ div >
    );
  }
}

export default App;
