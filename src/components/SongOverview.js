import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import Buttons from "./Buttons";

class SongOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  addSong = (song, artist, genre, rating) => {
    this.setState({
      songs: [
        ...this.state.songs,
        {
          id: this.state.songs.length + 1,
          song: song,
          artist: artist,
          genre: genre,
          rating: rating,
        },
      ],
    });
  };

  deleteSongs = () => {
    this.setState({
      songs: [],
    });
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <table style={{ width: "100%" }}>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </table>
        <SongList item={this.state.songs} />
        <Buttons onEmptyClick={this.deleteSongs} />
      </div>
    );
  }
}

export default SongOverview;
