import React from "react";

function Buttons(props) {
  return (
    <div>
      <button onClick={props.onEmptyClick}>Empty the songlist</button>
    </div>
  );
}

export default Buttons;
