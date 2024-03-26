import {useState} from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";








function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")))
  
  const [newItem, setNewItem] = useState('')
  
  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
};
 
const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
    

  }

  const handleCheck = (id) => {
  
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems); //this function allows the items to be clickable in the UI

    // localStorage.setItem("shoppinglist", JSON.stringify(listItems)); //this function allow the clicked items to be stored inside a local storage in the web browser
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
      
      
