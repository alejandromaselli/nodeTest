import React, { useEffect } from "react";
import Axios from "axios";

const GetAcronym = () => {
  useEffect(() => {
    console.log("useEffect de getList");
  }, []);

  return (
    <React.Fragment>
      <h3>Get a specific Acronym</h3>
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

export default GetAcronym;
