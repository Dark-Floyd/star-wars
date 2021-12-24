import React, { useState, useEffect, useCallback } from "react";
import { getPlanets } from "../../api";
import { Spinner } from "react-bootstrap";
import Bar from "./Chart/Bar/Bar";
import Chart from "./Chart/Chart";

const FullChart = () => {
  const [planets, setPlanets] = useState();
  const barWidth = 30;
  const barMargin = 30;
  const numberofBars = 5;
  const width = numberofBars * (barWidth + barMargin);
  const chartHeight = 100;

  const fetchPlanets = useCallback(async () => {
    const res = await getPlanets();
    setPlanets(res);
  }, []);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return planets ? (
    <Chart height={chartHeight} width={width} >
      {planets.map((planet, index) => {
        const barHeight = parseInt(Math.sqrt(1000,planet.population));
        return (
          <Bar
            key={planet.name}
            x={index * (barWidth + barMargin)}
            y={chartHeight - barHeight}
            width={barWidth}
            height={barHeight}
            planetName={planet.name}
            population={planet.population}
          />
        );
      })}
    </Chart>
  ) : (
    <Spinner animation="border" role="status" style={{ margin: "1rem" }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
export default FullChart;