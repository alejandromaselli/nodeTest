import React, { useState } from "react";
import axios from "axios";

const GetRandom = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(10);
  const submitted = (event) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_SERVER_URL}/random/${count}`;
    console.log(url);
    axios({
      method: "GET",
      url: url,
    }).then((response) => {
      var arrayList = [];
      response.data.map((item) => arrayList.push(item));
      setList(arrayList);
    });
  };
  return (
    <React.Fragment>
      <h3>Get a random acronyms</h3>
      <form onSubmit={submitted}>
        <label>Count: </label>
        <input
          type="text"
          onChange={(e) => setCount(e.target.value)}
          value={count}
        />
        <br/>
        <input type="submit" value="search" />
      </form>
      {list.length === 0 ? (
        <p>Please enter a Number:</p>
      ) : (
        list.map((item) => {
          return (
            <div className="acronym-container">
              <h3>Abbreviation:</h3>
              <p className="acronym-meaning">{item.abbreviation}</p>
              <h3>Meaning:</h3>
              <p className="acronym-title">{item.meaning}</p>
              <br />
              </div>
          );
        })
      )}
    </React.Fragment>
  );
};

export default GetRandom;
