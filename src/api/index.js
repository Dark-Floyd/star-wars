import axios from "axios";
const planetsNames = [
  { name: "Tatooine" },
  { name: "Alderaan" },
  { name: "Naboo" },
  { name: "Bespin" },
  { name: "Endor" },
];

const findHighestSum = async () => {
  let maxSum = 0;
  const vehicleHighestSum = {};

  try {
    const allVehicles = await axios(
      "https://www.swapi.tech/api/vehicles?page=1&limit=10"
    );
    for (let vehicle of allVehicles.data.results) {
      let tempSum = 0;
      let currentPlanets = [];
      let currentPilots = [];

      const v = await axios(vehicle.url);
      for (const pilot of v.data.result.properties.pilots) {
        const p = await axios(pilot);
        const homeWorld = (await axios.get(p.data.result.properties.homeworld))
          .data.result.properties;
        currentPlanets.push(homeWorld);
        currentPilots.push(p.data.result.properties.name);
        tempSum += parseInt(homeWorld.population);
      }
      if (tempSum > maxSum) {
        vehicleHighestSum.pilots = currentPilots;
        vehicleHighestSum.planets = currentPlanets;
        vehicleHighestSum.name = vehicle.name;
        maxSum = tempSum;
      }
    }
    return vehicleHighestSum;
  } catch (error) {
    console.log(error);
  }
};

const getPlanets = async () => {
  try {
    let requiredPlanets = [];
    let dataPlanets = [];
    const planets = await axios("https://www.swapi.tech/api/planets");
    for (let planet of planets.data.results) {
      const p = await axios(planet.url);
      const homeWorld = p.data.result.properties;
      dataPlanets.push(homeWorld);
    }
    return (requiredPlanets = dataPlanets.filter((o1) =>
      planetsNames.some((o2) => o1.name === o2.name)
    ));
  } catch (error) {
    console.log(error);
  }
};

export { findHighestSum, getPlanets };
