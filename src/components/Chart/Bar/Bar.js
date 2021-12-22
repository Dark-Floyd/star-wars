import React from "react";



const Bar = ({ x, y, width, height, planetName }) => (
    <>
      <rect x={x} y={y} width={width} height={height} /> 
      <text x={x + width / 3} y={y - 5}>
        {planetName}{height}
      </text>
    </>
  );

  export default Bar;