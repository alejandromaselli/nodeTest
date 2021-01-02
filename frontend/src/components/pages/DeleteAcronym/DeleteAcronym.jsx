import React, { useState } from "react";
import axios from "axios";

const DeleteAcronym = () => {
  const [acronym, setAcronym] = useState({
    abbreviation: "abre",
  });

  const submitted = (event) => {
    const { abbreviation, meaning } = acronym;
    event.preventDefault();
    const url = `${process.env.REACT_APP_SERVER_URL}/acronym/${abbreviation}`;
    axios({
      method: "DELETE",
      url: url,
      data: {
        abbreviation: abbreviation,
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
        <h3>DELETE an Acronym</h3>
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
          <input type="submit" value="DELETE" />
        </form>
        <p>Acronym: {acronym.abbreviation}</p>
      </React.Fragment>
    </div>
  );
};

export default DeleteAcronym;
