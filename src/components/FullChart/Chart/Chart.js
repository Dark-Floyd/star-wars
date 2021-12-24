import React from "react";

const Chart = ({ children, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width="90%"
    height="100%"
    preserveAspectRatio="xMidYMax meet"
  >
    {children}
  </svg>
);
export default Chart;
