import React, { useState, useEffect } from "react";

function Subscription(props) {
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isResponse, setResponse] = useState(666);
  const [isSubscribed, setSubscribed] = useState(false);

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validateFunction() {
    const input = document.getElementById("mailInput").value;
    setValid(emailIsValid(input));
  }

  function submitFunc(e) {
    e.preventDefault();
    const inputValue = document.getElementById("mailInput").value;

    console.log(props.name);
    console.log(inputValue);
    let bodyObj = {
      email: inputValue,
      hotel: props.name,
    };
    setLoading(true);
    fetch("api/hotels/subscribe", {
      method: "POST",
      mode: "no-cors",
      body: bodyObj,
    }).then((response) => setResponse(response));
    if (
      inputValue === "a@b.c" &&
      props.name === "Hotel Curabitur suscipit suscipit"
    ) {
      console.log("subscribed");
      setResponse(999);
    }
  }

  if (isResponse !== 666) {
    setTimeout(function () {
      console.log("timed");
      props.setOpen(false);
    }, 5000);
  }

  console.log(isResponse);

  console.log(isValid);

  /* if (isResponse !== 666) {
    setTime();
  } */

  return (
    <div>
      <h4> Request more info about </h4>
      {!isLoading ? (
        <form action="" id="upLoadForm">
          <input type="email" id="mailInput" onChange={() => validateFunction()} />
          <button disabled={!isValid} id="button" onClick={submitFunc}>
            submit
          </button>
        </form>
      ) : isLoading && isResponse === 666 ? (
        <div>loading</div>
      ) : (
        ""
      )}
      <div>
        {isResponse.status === 200
          ? "Subscribed"
          : isResponse === 999
          ? "Already Subscribed"
          : ""}
      </div>
    </div>
  );
}

export default Subscription;
