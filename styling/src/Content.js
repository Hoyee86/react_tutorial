import React from 'react'
import './Content.css'
const Content = () => {
    const handleNameChange = () => {
        const names = ["Adejare🖥️", "Adebisi💻", "Aderayo⌨️"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    };

    const handleClick = () => {
      console.log("You clicked")
    }

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`)
    }

  return (
    <main className='student'>
      
      <h1>{handleNameChange()}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onDoubleClick={() => handleClick2('Ajoke')}>Click me</button>  
    </main>
  )
}

export default Content
