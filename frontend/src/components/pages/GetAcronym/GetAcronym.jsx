import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetAcronym = () => {
  const notify = () => toast("Error, acronym doesn't exist");
  const [acronym, setAcronym] = useState({
    abbreviation: "LGH",
    meaning: "",
  });
  const [error, setError] = useState("");

  const submitted = (event) => {
    event.preventDefault();

    const url = `${process.env.REACT_APP_SERVER_URL}/acronym/${acronym.abbreviation}`;
    console.log(url);
    axios({
      method: "GET",
      url: url,
      data: {},
    })
      .then((response) => {
        console.log(response.data);
        setAcronym({ ...acronym, meaning: response.data.acronym });
        if (response.data.msg === `Error, acronym doesn't exist`) notify();
      })
      .then((error) => {
        if (error) console.log("ERROR:", error);
      });
  };

  return (
    <React.Fragment>
      <div>
        <ToastContainer />
      </div>
      <h3>Get a specific Acronym</h3>
      <form onSubmit={submitted}>
        <label>Acronym: </label>
        <input
          type="text"
          value={acronym.abbreviation}
          onChange={(e) =>
            setAcronym({ ...acronym, abbreviation: e.target.value })
          }
        />
        <br />
        <input type="submit" value="search" />
      </form>
      <h3>Meaning:</h3>
      <p className="match-container2">{acronym.meaning}</p>
    </React.Fragment>
  );
};

export default GetAcronym;
