import React from "react";

const PutAcronym = () => {
  return (
    <div>
      <React.Fragment>
        <h3>Put an Acronym</h3>
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
    </div>
  );
};

export default PutAcronym;
