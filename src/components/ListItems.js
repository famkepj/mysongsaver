import React from "react";

function ListItems(props) {
  return (
    <table>
      <tr
        key={props.item.id}
        value={props.item.song}
        onClick={props.clickItem}
        item={props.item}
      >
        <td>{props.item.song}</td>
        <td>{props.item.artist}</td>
        <td>{props.item.genre}</td>
        <td>{props.item.rating}</td>
      </tr>
    </table>
  );
}

export default ListItems;
