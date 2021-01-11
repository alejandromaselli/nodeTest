import React, { useState } from "react";
import axios from "axios";

const GetList = () => {
  const [text, setText] = useState({
    acronym: "LH6",
    from: "50",
    limit: "10",
  });

  const [gotResponse, setGotResponse] = useState({
    abbreviation: "",
    meaning: "",
    list: [],
  });

  const { acronym, from, limit } = text;

  const submitted = (event) => {
    event.preventDefault();

    const url = `${process.env.REACT_APP_SERVER_URL}/acronym?from=${from}&limit=${limit}&search=${acronym}`;
    console.log(url);
    axios({
      method: "GET",
      url: url,
      data: {},
    })
      .then((response) => {
        const [result, list] = response.data;
        const { abbreviation, meaning } = response.data[0].result;

        //console.log("response", response.data[0].result);
        //console.log("result", list.list);

        setGotResponse({
          ...gotResponse,
          abbreviation: abbreviation,
          meaning: meaning,
          list: list.list,
        });
        console.log(gotResponse);
      })
      .then((error) => {
        if (error) console.log("ERROR:", error);
      });
  };

  return (
    <React.Fragment>
      <h3 className="container-title">Get List of acronyms</h3>
      <form onSubmit={submitted}>
        <label>Acronym: </label>
        <input
          type="text"
          value={acronym}
          onChange={(e) => setText({ ...text, acronym: e.target.value })}
        />
        <br />
        <label>From:</label>
        <input
          type="text"
          value={from}
          onChange={(e) => setText({ ...text, from: e.target.value })}
        />
        <br />
        <label>Limit:</label>
        <input
          type="text"
          value={limit}
          onChange={(e) => setText({ ...text, to: e.target.value })}
        />
        <br />
        <input type="submit" value="search" />
      </form>
      {gotResponse.abbreviation.length === 0 ? (
        <h3>Fill out the form please!</h3>
      ) : (
        <React.Fragment>
          <div className="match-container">
            <h3>Match:</h3>
            <p>{gotResponse.abbreviation}</p>
            <h3>Meaning:</h3>
            <p>{gotResponse.meaning}</p>
          </div>
          <h2>Acronyms:</h2>
          {gotResponse.list.map((item) => (
            <div className="acronym-container">
              <h3>Acronym:</h3>

              <p className="acronym-meaning">{item.abbreviation}</p>
              <h3>Meaning:</h3>

              <p className="acronym-title">{item.meaning}</p>
            </div>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default GetList;
