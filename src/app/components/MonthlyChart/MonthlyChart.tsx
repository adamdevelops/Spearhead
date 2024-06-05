import { useState } from "react";
import { PieChart } from "../PieChart/PieChart";

export default function MonthlyChart() {
  const [data, setData ] = useState()

  const pieData = [
    { label: 'A', value: 20 },
    { label: 'B', value: 30 },
    { label: 'C', value: 50 }
  ];

  const dummyData = [
    {name:"Mark", value: 90},
    {name:"Robert", value: 12},
    {name:"Emily", value: 34},
    {name:"Marion", value: 53},
    {name:"Nicolas", value: 98},
  ]

  return (
    <div className="monthly-chart-area">
      <div className="pie-chart-area">
        <PieChart data={dummyData} width={700} height={400} />
      </div>
      <div className="expenses-area">
        <h3>Monthly Expenses</h3>
        <div className="categories-area">
          <span>Categories</span>
          <ul>
            <li>Bills</li>
            <li>Groceries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
