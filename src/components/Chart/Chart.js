import React, { useState, useEffect } from "react";
import axios from "axios";

const Chart = ({ children, width, height }) => {
  const [data, setData] = useState({ results: [] });
  const [population, setPopulation] = useState([]);
  const planets = [
    { name: "Tatooine" },
    { name: "Alderaan" },
    { name: "Naboo" },
    { name: "Bespin" },
    { name: "Endor" },
  ];

  useEffect(async () => {
    const planets = await axios("https://www.swapi.tech/api/planets");
    setData(planets.data);
	console.log(planets.data)
	for(const planet of planets.data.results.url){
		const p = await axios(planet)
		const homeWorld = (
            await axios.get(p.data.result.properties.homeworld)
          ).data.result.properties;
		  console.log(homeWorld)
	}

  }, []);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    >
      {children}
    </svg>
  );
  // return data.results.map((e1,i) => {
  // 	if (planets.some((e2) => e2.name === e1.name)) {
  // 		return (
  // 			<div key={i}>
  // 				{e1.name}
  // 				{/* {getPopulation(e1.url)}     */}
  // 			</div>
  // 		);
  // 	}
  // });
};

export default Chart;
