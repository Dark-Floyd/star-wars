import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chart = () => {
	const [data, setData] = useState({ results: [] });
	//const [population, setPopulation] = useState(0);
	const planets = [{ name: 'Tatooine' }, { name: 'Alderaan' }, { name: 'Naboo' }, { name: 'Bespin' }, { name: 'Endor' }];

	useEffect(async () => {
		const result = await axios('https://www.swapi.tech/api/planets');
		setData(result.data);
	}, []);

	// const getPopulation = (url) =>{

	//     axios.get(url).then((population) => {
	//         		setPopulation(population.data);
	//          	});

	//    console.log(url)

	// }

	return data.results.map((e1,i) => {
		if (planets.some((e2) => e2.name === e1.name)) {
			return (
				<div key={i}>
					{e1.name}
					{/* {getPopulation(e1.url)}     */}
				</div>
			);
		}
	});
};

export default Chart;
