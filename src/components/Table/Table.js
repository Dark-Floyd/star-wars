import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import classes from "./Table.module.css";
const Table = () => {
  const [vehicle, setVehicle] = useState("");
  const [max, setMax] = useState(0);


  const findHighestSum = async () => {
    let maxSum = max;
    try {
      const allVehicles = await axios(
        "https://www.swapi.tech/api/vehicles?page=1&limit=10"
      );
      for (let vehicle of allVehicles.data.results) {
        let tempSum = 0;
        const v = await axios(vehicle.url);
        for (const pilot of v.data.result.properties.pilots) {
          const p = await axios(pilot);
          const homeWorld = (
            await axios.get(p.data.result.properties.homeworld)
          ).data.result.properties;
          //console.log(homeWorld);
          //console.log(homeWorld.population);
          tempSum += parseInt(homeWorld.population);
        }

        if (tempSum > maxSum) maxSum = tempSum;

        //console.log(max); 
      }
      setMax(maxSum)
      console.log(maxSum);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //findHighestSum();
  }, [max]);

  return (
    <Card className={classes.table}>
      <Card.Body>
        <Card.Title>Part I</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Vehicle name with the largest sum
        </Card.Subtitle>
        <Card.Text>{max}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          Related home planets and their respective population
        </Card.Subtitle>
        <Card.Text>Planet, Population</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          Related pilot names
        </Card.Subtitle>
        <Card.Text>Name</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Table;
