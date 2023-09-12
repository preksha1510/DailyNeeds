import React, { useState } from "react";
import "../styles/dialog.css";
import axios from "axios";

const AddItemsDialog = ({ onClose, onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [error, setError] = useState("");
  const isButtonDisabled = itemName === "" || itemPrice === "";

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemPriceChange = (e) => {
    setItemPrice(e.target.value);
  };

  const handleADDClick = () => {
    if (!itemName || !itemPrice) {
      setError("Please fill out both fields.");
      return;
    }

    const data = {
      itemName: itemName,
      price: parseFloat(itemPrice),
    };

    axios
      .post("/priceList", data)
      .then((response) => {
        const newItem = response.data;
        onAddItem(newItem);
      })
      .catch((error) => console.error("Error:", error));

    onClose();
  };

  return (
    <div className="dialog">
      <div className="dialog-header">
        <button className="close-button" onClick={onClose}>
          &#x2716;
        </button>
      </div>
      <div className="dialog-content">
        <h2 data-testid="header">Add Item</h2>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={handleItemNameChange}
          />
        </div>
        <div>
          <label htmlFor="itemPrice">Item Price:</label>
          <input
            type="number"
            id="itemPrice"
            value={itemPrice}
            onChange={handleItemPriceChange}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="dialog-footer">
        <button
          className="add-button-submit"
          onClick={handleADDClick}
          disabled={isButtonDisabled}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddItemsDialog;
