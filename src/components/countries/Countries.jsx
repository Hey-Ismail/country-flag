// export default function Countries() {}
import React, { use, useState } from "react";
import Country from "./Country";
import "./style.css";

const Countries = ({ countries }) => {
  const [visitedCountries, setvisitedCountries] = useState([]); //array

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountries);
  };

  const [visitedFlags, setvisitedFlags] = useState([]);
  const handelVisitedFlags = (flag) => {
    // console.log(flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setvisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countries);
  const array = countriesData.countries;

  return (
    <>
      <div className="text">
        <h1 className="h1">
          Total countries : <span className="span">{array.length}</span>
        </h1>
        <h2>Total visited : {visitedCountries.length} </h2>
        <h2>Total visited Flags : {visitedFlags.length} </h2>
      </div>
      <div className="flags">
        {visitedFlags.map((flag, index) => (
          <img key={index} className="flag-img" src={flag}></img>
        ))}
      </div>
      <div className="countries-grid">
        {array.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handelVisitedFlags={handelVisitedFlags}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
