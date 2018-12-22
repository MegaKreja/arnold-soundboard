import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Buttons from "../components/Buttons";
import audioQ from "../audio/choirBoy.mp3";
import audioW from "../audio/cutiePie.mp3";
import audioE from "../audio/daddy.mp3";
import audioA from "../audio/discipline.mp3";
import audioS from "../audio/questions.mp3";
import audioD from "../audio/sob.mp3";
import audioZ from "../audio/stopIt.mp3";
import audioX from "../audio/stopWhining.mp3";
import audioC from "../audio/wtfWrong.mp3";
import './App.css';

class App extends Component {
  state = {
    buttons: [
      {
        key: 81,
        audio: audioQ,
        letter: "q",
        active: false
      },
      {
        key: 87,
        audio: audioW,
        letter: "w",
        active: false
      },
      {
        key: 69,
        audio: audioE,
        letter: "e",
        active: false
      },
      {
        key: 65,
        audio: audioA,
        letter: "a",
        active: false
      },
      {
        key: 83,
        audio: audioS,
        letter: "s",
        active: false
      },
      {
        key: 68,
        audio: audioD,
        letter: "d",
        active: false
      },
      {
        key: 90,
        audio: audioZ,
        letter: "z",
        active: false
      },
      {
        key: 88,
        audio: audioX,
        letter: "x",
        active: false
      },
      {
        key: 68,
        audio: audioC,
        letter: "c",
        active: false
      },
    ],
    currentAudio: null,
    on: true
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressHandler);
  }

  playAudio = (index) => {
    const button = this.state.buttons[index];
    const audio = new Audio();
    audio.src = button.audio;
    // audio.volume = 0.1;
    audio.play();
    audio.currentTime = 0;
  }

  keyPressHandler = (event) => {
    const buttons = [...this.state.buttons];
    let index = 0;
    for (let i = 0; i < buttons.length; i++) {
      if (event.keyCode === buttons[i].key) {
        index = i;
      }
      buttons[i].active = false;
    }
    buttons[index].active = true;
    this.setState({ buttons });
    this.playAudio(index);
    setTimeout(() => {
      buttons[index].active = false;
      this.setState({ buttons });
    }, 100)
  }

  onOffHandler = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      }
    });
  };

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
        <Buttons buttons={this.state.buttons} playAudio={this.playAudio} />
      </ div >
    );
  }
}

export default App;
