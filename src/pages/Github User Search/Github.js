import React, { useState } from "react";
import classes from "./GitHub.module.css";
import Form from "./Form";
import Users from "./Users";

function App() {
  const [results, setResults] = useState([]);

  const searchHandler = (data) => {
    setResults(data);
  };

  return (
    <div className={classes.container}>
    <main className={classes.main}>
      <h2>Project 5: GitHub User Search</h2>
      <Form onSearch={searchHandler} />
      <h3>Results</h3>
      <div className={classes.results}>
      {results.map((user) => (
        <Users
          key={user.login}
          avatar={user.avatar_url}
          url={user.html_url}
          username={user.login}
        />
      ))}
      </div>
    </main>
    </div>
  );
}

export default App;
