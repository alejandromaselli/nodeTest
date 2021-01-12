import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
  

const DeleteAcronym = () => {
  const [acronym, setAcronym] = useState({
    abbreviation: "",
  });

  const submitted = (event) => {
    const { abbreviation } = acronym;
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
        if(response.data.msg){
          toast(response.data.msg)
        }
      })
      .catch((error) => {
        if (error) console.error("ERROR", error);
      });
  };
  return (
    <div>
      <React.Fragment>
      <ToastContainer/>
        <h3 className="container-title">DELETE an Acronym</h3>
        <form onSubmit={submitted}>
          <label>Acronym:</label>
          <input
            type="text"
            onChange={(e) =>
              setAcronym({ ...acronym, abbreviation: e.target.value })
            }
            value={acronym.abbreviation}
          />
          <br />
          <input type="submit" value="Delete" />
        </form>
        <p>Acronym: {acronym.abbreviation}</p>
      </React.Fragment>
    </div>
  );
};

export default DeleteAcronym;
