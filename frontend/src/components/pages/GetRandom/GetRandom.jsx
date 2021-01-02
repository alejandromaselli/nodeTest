import React from "react";

const GetRandom = () => {
  return (
    <React.Fragment>
      <h3>Get a random acronyms</h3>
      <form>
        <label>Acronym: </label>
        <input type="text" />
        <br />
        <label>From:</label>
        <input type="text" />
        <br />
        <label>To:</label>
        <input type="text" />
        <br />
        <input type="submit" value="search" />
      </form>
    </React.Fragment>
  );
};

export default GetRandom;
