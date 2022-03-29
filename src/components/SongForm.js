import React, { useState } from "react";

function SongForm({ addSong }) {
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!songTitle) return;
    addSong(songTitle, artist, genre, rating);
    setSongTitle("");
    setArtist("");
    setGenre("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} className="SongForm">
      <input
        className="inputField"
        placeholder="Add a song"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
      />
      <input
        className="inputField"
        placeholder="Add a artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <select
        className="dropdownContent"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option ID="grey">Choose a genre</option>
        <option value="Pop">Pop</option>
        <option value="Hip-hop en rap">Hip-hop en rap</option>
        <option value="Rock">Rock</option>
        <option value="Dance en electronische muziek">
          Dance en electronische muziek
        </option>
        <option value="Latin">Latin</option>
        <option value="Indie- en alternatieve rock">
          Indie- en alternatieve rock
        </option>
        <option value="Klassiek">Klassiek</option>
        <option value="K-pop">K-pop</option>
        <option value="Country">Country</option>
        <option value="Metal">Metal</option>
      </select>
      <select
        className="dropdownContent"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option ID="grey">Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button className="addSongButton" onClick={handleSubmit}>
        Add Song
      </button>
    </form>
  );
}

export default SongForm;
