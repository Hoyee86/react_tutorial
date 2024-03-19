import { useState } from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import './Content.css'
const Content = () => {

  // const [name, setName] = useState('Bashzedhug🫂')
  const [items, setItems] = useState ([
    {
      id: 1,
      checked: false,
      item: "A bag of Garri"
    },
    {
      id: 2,
      checked: true,
      item: "Rice"
    },
    {
      id: 3,
      checked: false,
      item: "Cray-Fish"
    },
    {
      id: 4,
      checked: false,
      item: "Semo"
    },
    
  ])
    
  
  
  // const handleNameChange = () => {
  //       const names = ["Adejare🖥️", "Adebisi💻", "Aderayo⌨️"];
  //       const int = Math.floor(Math.random() * 3);
  //       setName(names[int])
  //   };

   

  //   const handleClick2 = (name) => {
  //     console.log(`${name} was clicked`)
  //   }

  return (
    <main className='student'>
      
      {/* <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click me</button>
      <button onDoubleClick={() => handleClick2('Ajoke')}>Click me</button>   */}
    
    <ul>
      {items.map((item) =>(
        <li className='item' key={item.id}>
          <input type="checkbox" checked={item.checked} />

          <label>{item.item}</label>
          <BsFillTrashFill/>
        </li>
      ))}
    </ul>
    </main>
    

  );
}

export default Content
