import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [category, setCategory] = useState("Produce")
  const [input, setInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onItemFormSubmit({ id: uuid(), name: input, category: category })

  }

  function handleInput(e) {
    setInput(e.target.value)
  }

  function handleCategory(e) {
    setCategory(e.target.value)
  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleInput} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
