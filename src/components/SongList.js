import React from "react";
import List from "./List";

function SongList(props) {
  return (
    <table>
      <List item={props} key={props.item.id} />
    </table>
  );
}

export default SongList;
