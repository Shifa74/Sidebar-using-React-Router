import { useRef } from "react";

const AddItems = (props) => {
    const itemInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredItem = itemInputRef.current.value;

        props.onAddItem(enteredItem);
        itemInputRef.current.value=('');

    }
    return (
        <>
         <form onSubmit={submitHandler}>
            <input type='text' placeholder="Add a new item" ref={itemInputRef} required/>
            <button type="Submit">Add</button>
         </form>
        </>
    )
}

export default AddItems;