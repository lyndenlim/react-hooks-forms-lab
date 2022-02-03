import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
