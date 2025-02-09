import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ViewAll() {
  // Sample spending list with additional fields.
  const spendingList = [
    {
      id: 1,
      date: "2025-01-01",
      category: "Food",
      description: "Grocery shopping",
      amount: 45.99,
    },
    {
      id: 2,
      date: "2025-01-02",
      category: "Bills",
      description: "Electricity bill",
      amount: 120.0,
    },
    {
      id: 3,
      date: "2025-01-03",
      category: "Entertainment",
      description: "Movie night",
      amount: 15.5,
    },
    {
      id: 4,
      date: "2025-01-04",
      category: "Travel",
      description: "Bus ticket",
      amount: 3.75,
    },
    {
      id: 5,
      date: "2025-01-05",
      category: "Shopping",
      description: "New jeans",
      amount: 89.99,
    },
  ];

  return (
    <div className="viewall-container">
      <div className="viewall-wrapper">
        <header className="viewall-header">
          <Link to="/" className="back-button">
            <ArrowLeft className="icon" />
            Back to Dashboard
          </Link>
          <h1>View All Spendings</h1>
        </header>
        <div className="spending-table-container">
          <table className="spending-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount ($)</th>
              </tr>
            </thead>
            <tbody>
              {spendingList.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>{item.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
