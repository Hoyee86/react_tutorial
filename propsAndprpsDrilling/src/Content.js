import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import "./Content.css";
const Content = ({items, handleCheck, handleDelete}) => {
  

  return (
    <main className="student">
    {items.length ? (
        <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onClick={() => handleCheck(item.id)}
              checked={item.checked}
            />

            <label 
            style={(item.checked) ? {textDecoration: "line-through"} : null} // style here allows the items to be highlighted bfr delete
              onDoubleClick={() => handleDelete(item.id)}
              >{item.item}</label>
            <BsFillTrashFill 
            onClick={() => handleDelete(item.id)}
            role= "button"
            tabIndex="0"
             />
          </li>
        ))}
      </ul>
    ) : (
      <p style={{marginTop: "2rem"}}>Your list is Empty!!!🚮</p>
    )}
    </main>
  );
};

export default Content;
