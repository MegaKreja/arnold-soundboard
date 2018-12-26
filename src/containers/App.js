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
        name: "Choir Boy",
        key: 81,
        audio: audioQ,
        letter: "q",
        active: false
      },
      {
        name: "Hello, cutie pie",
        key: 87,
        audio: audioW,
        letter: "w",
        active: false
      },
      {
        name: "Who is your daddy",
        key: 69,
        audio: audioE,
        letter: "e",
        active: false
      },
      {
        name: "You lack discipline",
        key: 65,
        audio: audioA,
        letter: "a",
        active: false
      },
      {
        name: "Ask bunch of questions",
        key: 83,
        audio: audioS,
        letter: "s",
        active: false
      },
      {
        name: "Dillon, you son of a bitch",
        key: 68,
        audio: audioD,
        letter: "d",
        active: false
      },
      {
        name: "Stop it",
        key: 90,
        audio: audioZ,
        letter: "z",
        active: false
      },
      {
        name: "Stop whinning",
        key: 88,
        audio: audioX,
        letter: "x",
        active: false
      },
      {
        name: "WTF, did I do wrong",
        key: 67,
        audio: audioC,
        letter: "c",
        active: false
      },
    ],
    currentAudio: "Welcome",
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
    this.setState({ currentAudio: button.name });
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
    }
    if (this.state.on) {
      buttons[index].active = true;
      this.setState({ buttons });
      this.playAudio(index);
      setTimeout(() => {
        buttons[index].active = false;
        this.setState({ buttons });
      }, 100)
    }
  }

  onOffHandler = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
        currentAudio: "Welcome"
      }
    });
  };

  render() {
    return (
      <div className="soundboard" onKeyDown={this.keyPressHandler} >
        <div className="top">
          <p>Arnold Schwarzenegger Soundboard</p>
          <Switch
            className="switch"
            checked={this.state.on}
            onChange={this.onOffHandler}
            value={this.state.on}
            color="primary"
          />
        </div>
        <div style={{ "backgroundColor": this.state.on ? "#7DBE35" : "#6d7572" }} className="display">
          <h2>{this.state.on ? this.state.currentAudio : "---"}</h2>
        </div>
        <Buttons buttons={this.state.buttons} playAudio={this.playAudio} on={this.state.on} />
      </ div >
    );
  }
}

export default App;
