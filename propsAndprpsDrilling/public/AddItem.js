import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddItem = () => {
  return (
    <form className="addform" onSubmit={}>
        <label htmlFor="addItem">
            AddItem
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
        onClick={}
        >
            <FaPlus/>
        </button>
    </form>



  )
}

export default AddItem
