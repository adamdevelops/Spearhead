import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { PieChartData } from "@/app/models/PieChartData";

type DataItem = {
  name: string;
  value: number;
};

type PieChartProps = {
  width: number;
  height: number;
  data: {name: string, value: number}[];
};

const MARGIN = 30;

const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"];


export const PieChart = ({ width, height, data }: PieChartProps) => {
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [radius, pie]);

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc: any, i) => {
          return <path key={i} d={arc} fill={colors[i]} />;
        })}
      </g>
    </svg>
  );
}

