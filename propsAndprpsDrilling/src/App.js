import {useState} from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";






function App() {

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
  const [newItem, setNewItem] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem]
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)

    setNewItem('')
  }

  return (
    <div className="App">
      <Header title = "Welcome to Props👨‍💻"/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
      
      
