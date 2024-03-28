import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import ApiRequest from "./ApiRequest";


function App() {
  //API
  const API_URL = `http://localhost:3500/items`;

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw Error(`The data is not accessible!!!`);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);

        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setisLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  // };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

   //POST
    const postOption = {
      method: "POST",
      headers: {
        'Content-Type':'apllication/json'
      },
      body: JSON.stringify(myNewItem)
    }
  const result = await ApiRequest(API_URL,postOption);
  if(result) setFetchError(result)

  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems); //this function allows the items to be clickable in the UI

    //UPDATE
    const myItem = listItems.filter((item)  => item.id === id)
    const updateOption = {
      method: 'PATCH',
      headers: {
        'Content-TYpe':'application/json'
      },
      body:JSON.stringify({checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await ApiRequest(reqUrl, updateOption);
    if(result) setFetchError(result)

  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems); //this filter function here filters through an array & to create a new array with listitems which contain all items except one with specified id.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);

    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Welcome to Props👨‍💻" />

      <SearchItem search={search} setSearch={setSearch} />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <main className="student">
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
