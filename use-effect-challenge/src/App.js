import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import Table from './Table';


function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async() => {
        try {
          const response = await fetch (`${API_URL}${reqType}`);
          const req = await response.json();
          console.log(req)
          setItems(req)

        }catch (error) {
          
        }
      }
      fetchItems ();

    }, [reqType])


  return (
    <div className="App">
      <Form reqType = {reqType} setReqType={setReqType}/>
      {/* <List items={items}/> */}

      <Table items={items}/>
      
    </div>
  );
}

export default App;
