import { useState } from "react";
import PieChart from "../PieChart/PieChart";

export default function MonthlyChart() {
  const [data, setData ] = useState()

  const pieData = [
    { label: 'A', value: 20 },
    { label: 'B', value: 30 },
    { label: 'C', value: 50 }
  ];

  return (
    <div className="monthly-chart-area">
      <div className="pie-chart-area">
        <span>hi111</span>
        <PieChart data={pieData} />
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
