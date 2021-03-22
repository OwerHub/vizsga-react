import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("api/hotels")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (items.length === 0) {
    console.log("adat még nem jött");
  } else {
    console.log(items);
  }

  return (
    <div className="App">
      {items.length !== 0 ? (
        items.map((data, iterator) => (
          <Hotel
            key={iterator}
            name={data.name}
            city={data.city}
            stars={data.stars}
          ></Hotel>
        ))
      ) : (
        <LoadingMask></LoadingMask>
      )}
    </div>
  );
};

export default App;
