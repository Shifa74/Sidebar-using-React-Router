import { useState } from "react";
import classes from './ShoppingList.module.css';

import Card from "./UI/Card";
import AddItems from './Items/AddItems';
import ItemsList from "./Items/ItemsList";


function App() {
  const [itemsList , setItemsList] = useState([]);
  const addUserHandler = (iName) => {
    setItemsList((prevItemsList) => {
     return [
      ...prevItemsList,
      {name: iName, id: Math.random().toString()},
     ]
    });
  };

 const handleItemsChange = (updatedItems) => {
  setItemsList(updatedItems);
 }

  return (
    <div className={classes.container}>
      <h1>Project 4: Shopping List</h1>
      <Card>
      <h2 className={classes.heading}>Items To Buy</h2>
        <AddItems onAddItem={addUserHandler}/>
        <ItemsList items={itemsList} onItemsChange={handleItemsChange}/>
      </Card>
    </div>
  )
};

export default App;
