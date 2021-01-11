import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostAcronym = () => {
  const [acronym, setAcronym] = useState({
    abbreviation: "",
    meaning: "",
  });

  const submitted = (event) => {
    const { abbreviation, meaning } = acronym;
    event.preventDefault();
    const url = `${process.env.REACT_APP_SERVER_URL}/acronym`;
    console.log(meaning);
    axios({
      method: "POST",
      url: url,
      data: {
        abbreviation: abbreviation,
        meaning: meaning,
      },
    }).then(()=>toast('Acronym added successfully!'));
  };

  return (
    <React.Fragment>
    <ToastContainer/>
      <h3>Post an Acronym</h3>
      <form onSubmit={submitted}>
        <label>Acronym: </label>
        <input
          type="text"
          onChange={(e) =>
            setAcronym({ ...acronym, abbreviation: e.target.value })
          }
          value={acronym.abbreviation}
        />
        <br />
        <label>Meaning:</label>
        <input
          type="text"
          onChange={(e) => setAcronym({ ...acronym, meaning: e.target.value })}
          value={acronym.meaning}
        />
        <br />
        <input type="submit" value="search" />
      </form>
    </React.Fragment>
  );
};

export default PostAcronym;
