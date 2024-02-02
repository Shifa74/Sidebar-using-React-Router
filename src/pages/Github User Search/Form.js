import { useState } from 'react';
import classes from './Form.module.css';

const API_URL = 'https://api.github.com';

const fetchResults  = async (query) => {
 try {
     const response = await fetch(`${API_URL}/search/users?q=${query}`);
     const data = await response.json();
     return data.items || [];
 } catch (error) {
     throw new Error(error);
 }
}
const Form = (props) => {
   const[query, setQuery] = useState("");

   const searchHandler = async (event) => {
    event.preventDefault();
    try {
        const resultData = await fetchResults(query);
        props.onSearch(resultData);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
   };

const onChangeHandler = (event) => {
    setQuery(event.target.value);
}

  return (
    <form className={classes.searchForm} onSubmit={searchHandler}>
      <input type="text" placeholder='Enter username or email' value={query} onChange={onChangeHandler}/>
      <button type="Submit">Search</button>
    </form>
  );
};

export default Form;