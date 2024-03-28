import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";


const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />

      <label
        style={item.checked ? { textDecoration: "line-through" } : null} // style here allows the items to be highlighted bfr delete
        onDoubleClick={() => handleDelete(item.id)}
      >
        {item.item}
      </label>
      <BsFillTrashFill
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};

export default LineItem;
