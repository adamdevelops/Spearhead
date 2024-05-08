import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { PieChartData } from "@/app/models/PieChartData";

const PieChart = ({ data } : any) => {
  const ref = useRef();

  useEffect(() => {
    // Define dimensions and radius
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.5; // Adjust the ratio to change the size of the hole

    // Define color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Define arc
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    // Define pie layout
    const pie = d3.pie<PieChartData>()
      .value(d => d.value)
      .sort(null);

    // Select the SVG element
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Generate donut chart
    const arcs = svg.selectAll('arc')
      .data(pie(data))  
      .enter()
      .append('g')
      .attr('class', 'arc');

    // Append path for each arc
    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    // Append text labels
    arcs.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text(d => d.data.label);
  }, [data]);

  return (
    <svg ref={ref}></svg>
  );

}