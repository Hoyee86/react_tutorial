import React from "react";
import LineItem from "./LineItem";
// import { BsFillTrashFill } from "react-icons/bs";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
