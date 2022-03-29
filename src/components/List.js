import React from "react";
import ListItems from "./ListItems";

function List(props) {
  const item = props.item.item;
  const songList = item.map((item) => <ListItems key={item.id} item={item} />);

  return <table className="songList">{songList}</table>;
}

export default List;
