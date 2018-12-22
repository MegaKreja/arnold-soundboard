import React from "react";
import "./Buttons.css";

const buttons = (props) => {
  const buttons = props.buttons.map((button, index) => (
    <div onClick={() => props.playAudio(index)} id={button.active ? "active" : ""} className="button" key={index}>
      <p>{button.letter}</p>
    </div>
  ))

  return (
    <div className="buttons">
      {buttons}
    </div>
  )
}

export default buttons;