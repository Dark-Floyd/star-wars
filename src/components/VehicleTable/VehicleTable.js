import React, { useState, useEffect, useCallback } from "react";
import { findHighestSum } from "../../api";
import { Card, Spinner, Table } from "react-bootstrap";
import classes from "./VehicleTable.module.css";

const VehicleTable = () => {
  const [vehicle, setVehicle] = useState();
  const fetchVehicle = useCallback(async () => {
    const res = await findHighestSum();
    setVehicle(res);
  }, []);
  const renderPlanets = (planets) => {
    return planets.map((planet, i) => (
      <td key={i}>
        {planet.name} , {planet.population}
      </td>
    ));
  };
  const renderPilots = (pilots) => {
    return pilots.map((pilot, i) => <td key={i}>{pilot} </td>);
  };
  useEffect(() => {
    fetchVehicle();
  }, []);

  return vehicle ? (
    <Card className={classes.table}>
      <Table responsive>
        <tbody>
          <tr>
            <td>Vehicle name with the largest sum</td>
            <td>{vehicle.name}</td>
            <td></td>
          </tr>
          <tr>
            <td>Related home planets and their respective population</td>
            {renderPlanets(vehicle.planets)}
          </tr>
          <tr>
            <td>Related pilot names</td>
            {renderPilots(vehicle.pilots)}
          </tr>
        </tbody>
      </Table>
    </Card>
  ) : (
    <Spinner animation="border" role="status" style={{ margin: "1rem" }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default VehicleTable;
