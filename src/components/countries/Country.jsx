import React, { useState } from "react";
import "./style.css"; //same folder
// import "../index.css" parent folder
// import "../../App.css" //

const Country = ({ country, handleVisitedCountries, handelVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  const btnClicked = () => {
    // setVisited(true);
    setVisited(visited ? false : true);
    handleVisitedCountries(country);
  };

  const [visitedFlag, setVisitedFlag] = useState(false);
  const btnClickedFlag = () => {
    setVisitedFlag(visitedFlag ? false : true);
  };

  return (
    <div className={`country-card ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt=" country.flags.flags.alt" />
      <h2>Country : {country.name.common}</h2>
      <div className="info">
        <p>
          population :{" "}
          <span className="population"> {country.population.population} </span>
        </p>
        <p>
          area : <span className="span">{country.area.area} </span> km²
        </p>
      </div>
      <div className="btns">
        <button onClick={btnClicked} className="visite-btn">
          {visited ? "Visited" : "Not visited"}
        </button>
        <button
          className="visite-btn"
          onClick={() => {
            handelVisitedFlags(country.flags.flags.png);
            btnClickedFlag();
          }}
        >
          {visitedFlag ? "Visited" : "Not visited"}
        </button>
      </div>
    </div>
  );
};

export default Country;
