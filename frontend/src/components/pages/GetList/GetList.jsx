import React, { useState } from "react";
import Axios from "axios";

const GetList = () => {
  const [text, setText] = useState({
    acronym: "LH6",
    from: "50",
    limit: "10",
  });
const {acronym, from, limit} = text;
  const submitted = (event) => {
    event.preventDefault()
    console.log(`https://${process.env.SERVER_URL}?from=${from}&limit-${limit}&search=${acronym}`);
    fetch(`https://${process.env.SERVER_URL}?from=${from}&limit-${limit}&search=${acronym}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <React.Fragment>
      <h3>Get List of acronyms</h3>
      <form onSubmit={submitted}>
        <label>Acronym: </label>
        <input
          type="text"
          value={acronym}
          onChange={(e) => setText({ ...text, acronym: e.target.value })}
        />
        <p>{acronym}</p>
        <br />
        <label>From:</label>
        <input
          type="text"
          value={from}
          onChange={(e) => setText({ ...text, from: e.target.value })}
        />
        <p>{from}</p>
        <br />
        <label>Limit:</label>
        <input
          type="text"
          value={limit}
          onChange={(e) => setText({ ...text, to: e.target.value })}
        />
        <p>{limit}</p>
        <br />
        <input type="submit" value="search" />
      </form>
    </React.Fragment>
  );
};

export default GetList;
