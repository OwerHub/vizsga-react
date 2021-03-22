import React, { useState, useEffect } from "react";
import Subscription from "./Subscription";

function Hotels(props) {
  const [isOpen, setOpen] = useState(false);
  const [isRequest, setRequest] = useState(false);

  return (
    <div>
      <div> Name: {props.name}</div>
      <button onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Show Less" : "Show More"}
      </button>
      {isOpen ? (
        <div>
          <div>
            city:
            {props.city}
          </div>
          <div>
            stars:
            {props.stars}
          </div>
          <button onClick={() => setRequest(!isRequest)}>Request more info</button>
          {isRequest ? (
            <Subscription setOpen={setRequest} name={props.name}></Subscription>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Hotels;
