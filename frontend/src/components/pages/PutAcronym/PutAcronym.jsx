import React, { useState } from "react";
import axios from "axios";

const PutAcronym = () => {
  const [acronym, setAcronym] = useState({
    abbreviation: "abre",
    meaning: "mean",
  });

  const submitted = (event) => {
    const { abbreviation, meaning } = acronym;
    event.preventDefault();
    const url = `${process.env.REACT_APP_SERVER_URL}/acronym/${abbreviation}`;
    axios({
      method: "PUT",
      url: url,
      data: {
        abbreviation: abbreviation,
        meaning: meaning,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error) console.error("ERROR", error);
      });
  };
  return (
    <div>
      <React.Fragment>
        <h3>Put an Acronym</h3>
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
          <label>New Value:</label>
          <input
            type="text"
            onChange={(e) =>
              setAcronym({ ...acronym, meaning: e.target.value })
            }
            value={acronym.meaning}
          />
          <br />
          <input type="submit" value="search" />
        </form>
        <p>Acronym: {acronym.abbreviation}</p>
        <p>Meaning: {acronym.meaning}</p>
      </React.Fragment>
    </div>
  );
};

export default PutAcronym;
