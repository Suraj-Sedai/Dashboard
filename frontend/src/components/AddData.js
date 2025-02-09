import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"; // Optional: if you're using react-router
import "./Dashboard.css"; // Import the CSS file

const categories = [
  "Entertainment",
  "Food",
  "Shopping",
  "Bills",
  "Travel",
  "Others",
];

export default function AddData() {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send to API or update state)
    console.log({ description, date, category, price });
    // Reset form (optional)
    setDescription("");
    setDate("");
    setCategory(categories[0]);
    setPrice("");
  };

  return (
    <div className="add-data-container">
      <div className="add-data-wrapper">
        <header className="add-data-header">
          <Link to="/" className="back-button">
            <ArrowLeft className="icon" />
            Back to Dashboard
          </Link>
          <h1>Add Data</h1>
        </header>
        <form className="add-data-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Enter a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              step="0.01"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Add Data
          </button>
        </form>
      </div>
    </div>
  );
}
