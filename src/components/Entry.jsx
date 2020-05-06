import React from "react";
import Details from "./Details";
import Terms from "./Terms";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <Terms emoji={props.emote} name={props.name} />
      </dt>
      <dd>
        <Details meaning={props.meaning} />
      </dd>
    </div>
  );
}

export default Entry;
