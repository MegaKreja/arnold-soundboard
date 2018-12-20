import React from "react";
import "./Buttons.css";

const buttons = (props) => {
  const buttons = props.buttons.map((button, id) => (
    <div className="button" key={id}>
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