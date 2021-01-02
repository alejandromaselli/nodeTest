import React from "react";

const PostAcronym = () => {
  return (
    <React.Fragment>
      <h3>Post an Acronym</h3>
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

export default PostAcronym;
