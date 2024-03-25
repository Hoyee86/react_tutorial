import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className="addform" onSubmit={}>
        <label htmlFor="addItem">
            Add Item
        </label>

        <input type="text" 
        autoFocus id='addItem'
        placeholder='Add Item'
        required
        value={}
        onChange={}
        />

        <button type='submit'
        aria-label='Add Item'
        
        >
            <FaPlus/>
        </button>
    </form>



  )
}

export default AddItem
