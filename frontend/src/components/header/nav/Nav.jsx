import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/getList"> GET Acronym With Parameters</Link>
        </li>
        <li>
          <Link to="/getAcronym"> GET a Specific Acronym</Link>
        </li>
        <li>
          <Link to="/getRandomAcronyms"> GET Random Acronyms</Link>
        </li>
        <li>
          <Link to="postAcronym"> POST an Acronym</Link>
        </li>
        <li>
          <Link to="/putAcronym"> PUT an acronym</Link>
        </li>
        <li>
          <Link to="/deleteAcronym"> DELETE an acronym</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
