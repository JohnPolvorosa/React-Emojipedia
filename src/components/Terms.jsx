import React from "react";

function Terms(props) {
  return (
    <div>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </div>
  );
}

export default Terms;
