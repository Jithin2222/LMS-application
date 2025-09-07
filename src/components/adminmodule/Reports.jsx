import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS,  Title,  Tooltip,  Legend,  CategoryScale,  LinearScale,  BarElement,  LineElement,  PointElement,  ArcElement,} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement
);

function Reports() {
  const [revenueData, setRevenueData] = useState([]);
  const [platformData, setPlatformData] = useState([]);

  useEffect(() => {
    const purchases = JSON.parse(localStorage.getItem("purchases")) || [];
    const monthlyRevenue = {};
    purchases.forEach((p) => {
      const month = new Date(p.date).toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      if (!monthlyRevenue[month]) {
        monthlyRevenue[month] = { revenue: 0, count: 0 };
      }
      monthlyRevenue[month].revenue += Number(p.price || 0);
      monthlyRevenue[month].count += 1;
    });
    setRevenueData(
      Object.entries(monthlyRevenue).map(([month, data]) => ({
        month,
        revenue: data.revenue,
        count: data.count,
      }))
    );

    setPlatformData([
      { metric: "Active Users", value: 320 },
      { metric: "Courses Created", value: 85 },
      { metric: "Completed Enrollments", value: 217 },
    ]);
  }, []);

  const barChartData = {
    labels: revenueData.map((d) => d.month),
    datasets: [
      {
        label: "Revenue ($)",
        data: revenueData.map((d) => d.revenue),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineChartData = {
    labels: revenueData.map((d) => d.month),
    datasets: [
      {
        label: "Courses Sold",
        data: revenueData.map((d) => d.count),
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const pieChartData = {
    labels: platformData.map((d) => d.metric),
    datasets: [
      {
        data: platformData.map((d) => d.value),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="p-4">
      <h2>📊 REPORTS</h2>

      <h5 className="mt-4">Revenue Reports</h5>
      <Bar data={barChartData} />

      <h5 className="mt-4">Courses Sold</h5>
      <Line data={lineChartData} />

      <h5 className="mt-4">Platform Usage</h5>
      <Pie data={pieChartData} />

      <table className="table table-striped table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>Month</th>
            <th>Total Revenue</th>
            <th>Courses Sold</th>
          </tr>
        </thead>
        <tbody>
          {revenueData.map((d, i) => (
            <tr key={i}>
              <td>{d.month}</td>
              <td>${d.revenue.toFixed(2)}</td>
              <td>{d.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
