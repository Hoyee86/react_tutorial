import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import "./Content.css";
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of Garri",
    },
    {
      id: 2,
      checked: false,
      item: "Rice",
    },
    {
      id: 3,
      checked: false,
      item: "Cray-Fish",
    },
    {
      id: 4,
      checked: false,
      item: "Semo",
    },
  ]);

  const handleCheck = (id) => {
    // console.log(`key:${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems); //this function allows the items to be clickable in the UI

    localStorage.setItem("shoppinglist", JSON.stringify(listItems)); //this function allow the clicked items to be stored inside a local storage in the web browser
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems); //this filter function here filters through an array & to create a new array with listitems which contain all items except one with specified id.
  };

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
