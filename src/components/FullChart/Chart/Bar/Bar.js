import React from "react";

const Bar = ({ x, y, width, height, planetName, population }) => (
  <>
    <text x={x + width / 6} y={y - 15} style={{ fontSize: "0.35rem" }}>
      {`${population}`}
    </text>
    <rect x={x} y={y} width={width} height={height} />
    <text x={x + width / 3.5} y={y -45} style={{ fontSize: "0.5rem" }}>
      {`${planetName}`}
    </text>
  </>
);
export default Bar;
