import classes from './ItemsList.module.css'

const ItemsList = (props) => {
 
    const onRemoveItem = (itemToRemove) => {
        const updatedItems = props.items.filter((item) => {
            return item !== itemToRemove;
        });
        props.onItemsChange(updatedItems);
    }

  return (
    <>
    <ul className={classes.listItems}>
      {props.items.map((item) => (
        <li key={item.id} className={classes.list}>
          {item.name}
          <button className={classes.delete} onClick={() => onRemoveItem(item)}>x</button>
        </li>
      ))}
    </ul>
    </>
  );
};

export default ItemsList;
