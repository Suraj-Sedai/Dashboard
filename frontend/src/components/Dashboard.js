import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Home, Plus, Grid, Settings, Download, LogOut } from "lucide-react";
import { Chart } from "chart.js/auto";
import "./Dashboard.css"; // Import the CSS file

export default function Dashboard() {
  const spendingData = [
    { category: "Entertainment", amount: 714.25 },
    { category: "Food", amount: 104.04 },
    { category: "Shopping", amount: 917.55 },
    { category: "Bills", amount: 523.97 },
    { category: "Travel", amount: 312.85 },
    { category: "Others", amount: 14.27 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">


        {/* Main Content */}
        <main className="main-content">
          <h1 className="dashboard-title">Dashboard</h1>

          {/* Metrics */}
          <section className="metrics">
            <Card title="Total Spending" value="$4128.98" />
            <Card title="Average Spending" value="$687.54" />
          </section>

          {/* Spending Categories and Chart */}
          <section className="spending-section">
            <CategoryList data={spendingData} />
            <ChartCard data={spendingData} />
          </section>

          {/* Download Section */}
          <section className="download-section">
            <h2>Download Your Financial Data</h2>
            <div className="download-buttons">
              <DownloadButton format="PDF" />
              <DownloadButton format="CSV" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// Sidebar Button Component with optional navigation
function SidebarButton({ Icon, text, to }) {
  const buttonContent = (
    <button className="sidebar-button">
      <Icon className="icon" />
      <span className="sidebar-text">{text}</span>
    </button>
  );

  // If a "to" prop is provided, wrap the button with a Link for navigation.
  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent;
}

// Card Component for Metrics
function Card({ title, value }) {
  return (
    <div className="card metric-card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
    </div>
  );
}

// Spending List Component
function CategoryList({ data }) {
  return (
    <div className="card category-card">
      <h3>Spending by Category</h3>
      <div className="category-list">
        {data.map((item) => (
          <div key={item.category} className="spending-item">
            <span className="category-name">{item.category}</span>
            <span className="category-amount">${item.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Chart Card Component
function ChartCard({ data }) {
  return (
    <div className="card chart-card">
      <PieChart data={data} />
    </div>
  );
}

// Pie Chart Component using Chart.js
function PieChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: data.map((item) => item.category),
        datasets: [
          {
            data: data.map((item) => item.amount),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
            borderColor: "#222",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: {
              color: "#fff",
            },
          },
        },
      },
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
}

// Download Button Component
function DownloadButton({ format }) {
  return (
    <button className="download-button">
      <Download className="icon" />
      <span>{format}</span>
    </button>
  );
}
