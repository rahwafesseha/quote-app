import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [tracks, setTracks] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});

  //This gets all the quotes when the page loads
  // useEffect(() => {
  //   fetch("https://shard-curved-tourmaline.glitch.me/quotes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTracks(data);
  //     });
  // }, []);

  //This populates the random quote when the page loads!
  // useEffect(() => {
  //   fetch("https://shard-curved-tourmaline.glitch.me/quotes/random")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRandomQuote(data);
  //     });
  // }, []);

  //This gets a new random quote every time the button is pressed
  const generateQuote = () => {
    fetch("https://shard-curved-tourmaline.glitch.me/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setRandomQuote(data);
      });
  };

  return (
    <div className="app">
      <h3 className="ranQoute">
        Random Quote: "{randomQuote.quote} -{randomQuote.author}
        {randomQuote.author}"
      </h3>
      <button onClick={generateQuote}> Generate a random quote! </button>
      {/* <hr />
      {tracks.map((track) => (
        <p>{track.quote}</p>
      ))} */}
    </div>
  );
}

export default App;
