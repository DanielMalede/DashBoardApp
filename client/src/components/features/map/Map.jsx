import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { useContext } from 'react';

const data = [
  ["Country", "Popularity"],
  ["Germany", 10],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["Israel",500]
];

function Map() {
//   const { countries, setCountries } = useContext(countriesContext)
//   console.log(countries);

  // const data = countries.map((item)=>item.countryName);

  return (
    <div className="geo-chart">
      <Chart chartType="GeoChart"  height="50vh" data={data} />
    </div>
  );
};

export default Map;