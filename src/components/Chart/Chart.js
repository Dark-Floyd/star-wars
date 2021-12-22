import React, { useState, useEffect, useCallback } from "react";
import { getPlanets } from "../../api";
import { Card, Spinner, Table } from "react-bootstrap";

const Chart = ({ children, width, height }) => {
  const [planets, setPlanets] = useState();
  const barWidth = 50;
  const barMargin = 30;
  const numberofBars = expensesData.length;
  let width = numberofBars * (barWidth + barMargin);

  const fetchPlanets = useCallback(async () => {
    const res = await getPlanets();
    setPlanets(res);
  }, []);

  const renderChart = (planets)=> {
    {planets.map((planet, index) => {
      const barHeight = planet.population;
      return (
        <Bar
        key={ined}
        x={index * (barWidth + barMargin)}
        y={chartHeight - barHeight}
        width={barWidth}
        height={barHeight}
        planetName={planet.name}
        />
      );
    })}
  }

  useEffect(() => {
    fetchPlanets();
  }, []);
  return planets ? (
    <Card>
      {renderChart(planets)}
    </Card>
  ) : (
    <Spinner animation="border" role="status" style={{ margin: "1rem" }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Chart;
