import React, { useState } from "react";
import "./styles.css";

var musicDB = {
  romantic: [
    { name: "Nazm Nazm", rating: "4/5" },
    { name: "Tum Hi Ho", rating: "5/5" },
    { name: "Pehli Nazar Mein", rating: "5/5" }
  ],
  electronic: [
    { name: "Closer", rating: "5/5" },
    { name: "Goosebumps", rating: "5/5" },
    { name: "Wake me up", rating: "5/5" }
  ],
  hiphop: [
    { name: "Fight the Power", rating: "4/5" },
    { name: "Juicy", rating: "5/5" },
    { name: "G.E.T.O", rating: "4.5/5" }
  ]
};

var genres = Object.keys(musicDB);

export default function App() {
  var [selectedGenre, setGenre] = useState("romantic");

  function inputClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 🎵 goodsongs</h1>
      <p style={{ paddingBottom: "0.5rem" }}>
        {" "}
        Checkout my favourite songs. Select a genre to get started{" "}
      </p>
      <div>
        {genres.map((genre) => (
          <button
            onClick={() => inputClickHandler(genre)}
            style={{
              padding: "0.5rem",
              paddingRight: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid black",
              cursor: "pointer",
              margin: "0.5rem 0.3rem",
              backgroundColor: "#E5E7EB"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "large" }}>{music.name}</div>
              <div style={{ fontSize: "small" }}>{music.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
